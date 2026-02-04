const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ greeting: "hi" });
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.json({ message: `hi there ${name}` });
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
