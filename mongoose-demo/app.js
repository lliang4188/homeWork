const mongoose = require('mongoose');

mongoose.connect('mongodb://test:123456@10.211.55.3:15000/testdb', {
    useNewUrlParser: true, useUnifiedTopology: true })

const User = mongoose.model('users', { name:String, age: Number, email: String})
const imooc = new User({
    mame: 'imooc-test',
    age: 30,
    email:'imooc@imooc.com'
})
imooc.save().then(() => { console.log('save Ok!');})    