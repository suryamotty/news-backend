const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/news')

//model for users
const User= mongoose.model('User',{
    email:String,
    pswd:String
})
module.exports= {
    User
}