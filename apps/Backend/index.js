import express from 'express';
import cors from 'cors';
import router from './src/routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});