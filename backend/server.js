const express = require('express');
const app = express();
const crudRoutes = require('./routes/crud-routes');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());

// app.use(
//     cors({
//         origin: 'http://localhost:5000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     })
// );
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH , DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-With, Content-Type, Accept'
    // );
    next();
});

app.use('/', crudRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build'));
});

mongoose.connect(
    'mongodb+srv://crud-app:2lUy9nVCBHQyxtB6@cluster0.hqba7.mongodb.net/crud-app?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB')
);
app.listen(5000, () => {
    console.log('Server Started on Port : 5000');
});
