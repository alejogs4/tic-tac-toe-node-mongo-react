const app = require('./app');
const { port } = require('./config/express');

app.listen(port, () => {
  console.log(`Running in port ${port}`);
});
