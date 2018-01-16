const mongoose = require('mongoose');
const bakedSchema = new mongoose.Schema({
    name: String,
    size: String,
    frosted: Boolean,
    region: String
});

const Baked = mongoose.model('Baked', bakedSchema);

module.exports = Baked;