var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  if (req.query.docente != undefined && req.query.docente != '') {
    res.render('home', { title: 'Inicio' ,query:req.query});
  }else{

    res.redirect('/');
  }
  
  
});

module.exports = router;