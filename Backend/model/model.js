const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    Dname:String,
    Pname:String,
    Age:Number,
    Date:Date,
    Data:Buffer
});

const Model = mongoose.model('Data', fileSchema);

module.exports = Model;
