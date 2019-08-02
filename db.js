const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;

const UserInfo = new Schema({
    id : String,
    pwd : String,
    name : String,
    phone : Number
})

mongoose.model('UserInfo', UserInfo);
module.exports.UserInfo = mongoose.model('UserInfo');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/board');