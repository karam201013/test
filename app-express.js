const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from karam201013/test (Express) — Node.js is working!');
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
