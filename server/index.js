require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {PORT_SERVER, STRING_CONNECTION, SESSION_SECRET} = process.env;
const {getHouses, addHouse} = require('./controller/controller');

const app = express();
app.use(express.json());

massive(STRING_CONNECTION).then(db => {
    app.set('db', db);
    console.log(`Connected to db`)
}).catch(err => console.log(err))

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUnitialized: false
    })
)



//End Points
app.get(`/api/houses`, getHouses);

app.post('/api/houses', addHouse);

// app.delete(`/api/houses/:id` deleteHouse)

app.listen(PORT_SERVER, () => {
    console.log(`Live from port ${PORT_SERVER}`);
})