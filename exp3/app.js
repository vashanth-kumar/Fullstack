const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb+srv://vashanthakumarks:9994175646@cluster0.4bc3obv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    rollno: String,
    degree: String,
    perc10: Number,
    perc12: Number,
    percUG: Number,
    percPG: Number
});

const Student = mongoose.model('Student', studentSchema);

app.engine('handlebars', require('express-handlebars').engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const students = await Student.find().lean();
    res.render('home', { students });
});

app.get('/add', (req, res) => {
    res.render('form');
});

app.post('/add', async (req, res) => {
    const data = new Student(req.body);
    await data.save();
    res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
    const student = await Student.findById(req.params.id).lean();
    res.render('edit', { student });
});

app.post('/edit/:id', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

app.listen(3002, () => {
    console.log("Server running at http://localhost:3002");
});
