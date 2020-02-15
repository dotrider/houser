
module.exports = {


    getHouses: (req, res) => {
        // res.status(200).send('testing')

        const db = req.app.get('db');

        db.get_houses().then(houses => {
            res.status(200).send(houses);
        })
    },

    addHouse: (req, res) => {
        const {name, address, city, state, zipcode} = req.body;
        const db = req.app.get('db');

        db.add_houses([name, address, city, state, zipcode]).then(house => {
            res.status(200).send(house);
        })
    }}