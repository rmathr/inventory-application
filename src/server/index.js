const express = require('express');
const About = require('../client/components/About');

const os = require('os');
const app = express();
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.use('/about', (req, res) => {
  res.render(<About />);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
