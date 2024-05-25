const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')
const { required } = require('nodemon/lib/config')
const userSchema = new moongose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },

})
module.exports = mongoose.model('user', userSchema)