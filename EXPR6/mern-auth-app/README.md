# MERN Authentication App

A full-stack authentication application built with MongoDB, Express.js, React, and Node.js.

## Features

- ✅ User Registration (Signup)
- ✅ User Login with JWT Authentication
- ✅ Password Hashing with bcrypt
- ✅ Protected Routes
- ✅ Responsive UI with Tailwind CSS
- ✅ Cookie-based Session Management
- ✅ MongoDB Database Integration

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - Frontend library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
mern-auth-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js     # Home page
│   │   │   ├── Login.js    # Login page
│   │   │   └── Signup.js   # Registration page
│   │   ├── App.js          # Main App component
│   │   └── index.js        # React entry point
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── models/
│   │   └── User.js         # User model
│   ├── routes/
│   │   └── auth.js         # Authentication routes
│   ├── .env                # Environment variables
│   ├── server.js           # Server entry point
│   └── package.json
├── package.json            # Root package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/vashanth-kumar/Fullstack.git
cd Fullstack/EXPR6/mern-auth-app
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Setup
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth-app
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the application

#### Option 1: Run both client and server together
```bash
# From the root directory
npm run dev
```

#### Option 2: Run client and server separately
```bash
# Terminal 1 - Start the server
cd server
npm start

# Terminal 2 - Start the client
cd client
npm start
```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/signup` | Register a new user |
| POST   | `/login`  | Login user |
| GET    | `/logout` | Logout user |

### Request/Response Examples

#### Signup
```json
POST /api/auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

## Usage

1. **Access the application**: Open `http://localhost:3000` in your browser
2. **Register**: Create a new account using the signup form
3. **Login**: Use your credentials to login
4. **Protected Area**: Access authenticated user features

## Development

### Available Scripts

#### Root Directory
- `npm run dev` - Run both client and server concurrently
- `npm run server` - Run only the server
- `npm run client` - Run only the client
- `npm run install-all` - Install dependencies for both client and server

#### Server Directory
- `npm start` - Start the server
- `npm run dev` - Start server with nodemon (auto-restart)

#### Client Directory
- `npm start` - Start the React development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Vashanth Kumar**
- GitHub: [@vashanth-kumar](https://github.com/vashanth-kumar)

## Acknowledgments

- Built as part of Full Stack Development learning
- MERN stack implementation
- Modern authentication patterns
