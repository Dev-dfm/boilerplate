import express from 'express';

const { PORT = 3000 } = process.env;

const app = express();

// Serve app production bundle
app.use(express.static('dist/app'));

app.listen(PORT, () => {
  console.log(`photoplay app listening at http://localhost:${PORT}`);
});
