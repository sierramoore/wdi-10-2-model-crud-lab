const express = require('express');
const router = express.Router();
const Baked = require('../models/bakedModel.js');

router.get('/', (req,res) =>{
   // res.send("Its woking ")
    res.render('./baked/index.ejs')
});

router.post('/', (req,res)=>{
   if(req.body.frosted){
       req.body.frosted = true
   }else{
       req.body.frosted = false;
   }

   Baked.create(req.body, (err, newBakedData) =>{
      if(err) console.log(err);
       console.log(newBakedData);
       res.redirect('/baked');
   })
});

router.get('/new', (req, res) =>{
   res.render('./baked/new.ejs')
});


module.exports = router;