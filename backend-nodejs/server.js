const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Replace with your frontend's origin
}));

// Your other routes and middleware go here

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});