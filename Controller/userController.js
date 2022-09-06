let user = require('../fakeData.json')
const fs = require('fs')
var data = fs.readFileSync('fakeData.json');
//@desc userData Randomly calling from fake data 
//@route  get/user/random
//method  private
const getRandomUser = (req, res) => {
    const id = Math.floor(Math.random() * 15) + 1;
    console.log(id)
    const filter = user.find(us => us.id == id);
    if (filter) {
        res.send(filter)
    }
}


//@desc userData calling from fake data 
//@route  user/all
//method  private
const getAllUser = (req, res) => {
    const query = Number(req.query.limit);
    if (query) {
        res.send(user.slice(0, query))
    } else {
        res.send(user)
    }
    console.log(query)
}


//@desc userData save from UI 
//@route  /user/save
//method  private
const saveUser = (req, res) => {
    console.log(req.body)
    const { id, gender, name, contact, address, photoUrl } = req.body;
    const filter = user.find(exist => exist.id == id);
    if (!filter) {
        if (id && gender && name && contact && address && photoUrl) {
            var myObject = JSON.parse(data);
           let result =  myObject.push(req.body)
           console.log(result);
            
            res.send({ message: "Data Inserted" })
        } else {
            res.send({ message: "value Messing" })
        }
    } else {
        res.send({ message: "already id exist" })
    }
}





module.exports = { getAllUser, getRandomUser, saveUser }