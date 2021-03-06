const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type:String,
        validate : {
            validator : (name) => name.length > 2,
            message : 'Name must be longer than 2 characters.'
            
        },
        required : [true,'User name not provided.']
    },
    postCount : Number
});


const User = mongoose.model('user',UserSchema);

module.exports = User;