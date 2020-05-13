const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/public', express.static(`${__dirname}/public`));

app.get('/images/get', function (req, res) {
  const images = {
    0: 'cat',
    1: 'unicorn'
  };
  const index = Math.round(Math.random());
  return res.json({
    name: 'cat',
    src: `${req.protocol}://${req.headers.host}/public/images/${images[index]}.jpg`
  });
});

app.listen(3000, () => {
  console.log(`Port: 3000`);
});
