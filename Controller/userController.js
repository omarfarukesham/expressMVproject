let user = require('../fakeData.json')

//@desc userData calling from fakedata 
//@route  get/user/all
//method  private
const getAllUser =(req, res)=>{
    const query = Number(req.query.limit);
    if (query) {
        res.send(user.slice(0, query))
    } else {
        res.send(user)
    }
}





module.exports = {getAllUser}