const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const emailRoutes = require('./routes/email');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
