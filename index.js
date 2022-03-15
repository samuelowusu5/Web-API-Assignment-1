const express = require('express');
const app = express();
const port = 80;

app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});