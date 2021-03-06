import express from 'express';
import router from './router';

const port = 3000;

const app = express();

app.use(router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`app is listening on port ${port}`));
