
import express from 'express'
const app = express();

app.use(express.json());
app.get('/managers', (req, res) => {
  res.json({ message: "This is the GET product path" });
});

app.get('/employees', (req, res) => {
  res.json({ message: "This is the GET user path" });
});

// POST routes
app.post('/managers', (req, res) => {
  res.json({ message: "This is the POST product path and a new product was added" });
});

app.post('/employees', (req, res) => {
  res.json({ message: "This is the POST user path and a new user was added" });
});

app.put('/managers', (req, res) => {
  res.json({ message: "This is the PUT product path and a product was updated" });
});

app.put('/employees', (req, res) => {
  res.json({ message: "This is the PUT user path and a user was updated" });
});

// DELETE routes
app.delete('/managers', (req, res) => {
  res.json({ message: "This is the DELETE product path and a product was removed" });
});

app.delete('/employees', (req, res) => {
  res.json({ message: "This is the DELETE user path and a user was removed" });
});


app.patch('/managers', (req, res) => {
  res.json({ message: "This is the PATCH product path and a product was partially updated" });
});

app.patch('/employees', (req, res) => {
  res.json({ message: "This is the PATCH user path and a user was partially updated" });
});
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
