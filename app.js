const express = require('express');
const app = express();
const usersRouter = require('./users/users.router');
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Ok!' });
});

app.use('/', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));