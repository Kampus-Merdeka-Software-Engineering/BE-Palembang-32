const express = require('express');

const usersRoutes = require('./routes/users');
const dokterRoutes = require('./routes/dokter');
const bookRoutes = require('./routes/book');

const MiddlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(MiddlewareLogRequest);
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/dokter', dokterRoutes);
app.use('/book', bookRoutes);


app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})