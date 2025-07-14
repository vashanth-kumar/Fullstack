const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', require('express-handlebars').engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

let studentInfo = {};

app.get('/', (req, res) => {
    res.render('form1');
});

app.post('/form2', (req, res) => {
    studentInfo = {
        name: req.body.name,
        rollno: req.body.rollno,
        degree: req.body.degree,
        year: req.body.year
    };
    res.render('form2');
});

app.post('/result', (req, res) => {
    const marks = {
        java: parseInt(req.body.java),
        python: parseInt(req.body.python),
        cloud: parseInt(req.body.cloud),
        dbms: parseInt(req.body.dbms),
        ml: parseInt(req.body.ml)
    };

    const total = marks.java + marks.python + marks.cloud + marks.dbms + marks.ml;
    const percentage = (total / 500 * 100).toFixed(2);

    const resultData = {
        ...studentInfo,
        ...marks,
        total,
        percentage
    };

    fs.writeFileSync('student_data.json', JSON.stringify(resultData, null, 4));
    res.render('result', { data: resultData });
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
