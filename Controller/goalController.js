//desc  get data from data base
//route api/goals
//method private

const getGoal = (req, res)=>{
    res.send('Hi I am from controller Get request')
}
//desc  get data from data base
//route api/goals
//method private

const setGoal = (req, res)=>{
    res.send('Random')
}
const updateGoal = (req, res)=>{
    res.send(`Hello this update api .... ${req.params.id}`)
}
const deleteGoal = (req, res)=>{
    res.send(`Hello this Delete api .... ${req.params.id}`)
}


module.exports = {getGoal, setGoal, updateGoal, deleteGoal}