const app = require('./server');

async function main() {
  const port = app.get('port');
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log('Server on port:', port);
}

main();
