const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


require('./db/db.js');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


const bakedController = require('./controllers/baked.js');

app.use('/baked', bakedController);



app.get('/', (req, res) => {
	res.render('index.ejs');
})

app.get('/*/', (req, res) => {
	res.send('404 u fucked up');
})













app.listen(3000, ()=>{
    console.log('sever listening on port 3000')
});