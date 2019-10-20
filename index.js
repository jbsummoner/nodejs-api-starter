const app = require('./server');
const db = require('./db');

async function main() {
  db.initDatabase();

  const port = app.get('port');
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log('Server on port:', port);
}

main();
