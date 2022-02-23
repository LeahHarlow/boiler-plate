const port = process.env.PORT || 3000;
const app = require('./app');

app.listen(port, function () {
  console.log(`Comin' in loud and clear on ${port}`);
});
