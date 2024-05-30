// Importing necessary modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import parRoute from './routes/parRoute.js';
import userRoute from './routes/userRoute.js';

// Initializing the app
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // For enabling CORS

// MongoDB connection
const mongoURI = 'mongodb+srv://user:admin@mgsomalitbog.hlfy1ms.mongodb.net/?retryWrites=true&w=majority&appName=MGSOMalitbog';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route
app.use('/api/parRoute', parRoute);
app.use('/api/userRoute', userRoute);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
