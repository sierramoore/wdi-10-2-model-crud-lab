const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


require('./db/db.js');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


const bakedController = require('./controllers/baked.js');

app.use('/baked', bakedController);



















app.listen(3000, ()=>{
    console.log('sever listening on port 3000')
});