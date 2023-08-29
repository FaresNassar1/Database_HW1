import express from 'express';
import registerouter from './routes/register'
import dataSource from './db/dataSource.js';
import db from './db/dataSource'
const app = express();
const PORT=6000;


app.use(express.json());

app.use('/register',registerouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
  db.initialize();

});

export default app;
