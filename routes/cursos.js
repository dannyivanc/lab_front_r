var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query);
  let ok=true,status=200;
  if (req.query.docente != undefined && req.query.docente != '') {
    fetch('http://localhost:8000/api/cursos/?docente='+req.query.docente)
    .then(result => {
      /*console.log('result',result);
      console.log(result.ok);
        console.log(result.status);
        console.log(result.statusText);
        ok=result.ok;
        status=result.status;    */    
      return result.json();
    })
    .then(result => {
      
      /*
      console.log('json', result);
      console.log('ok',ok);
      console.log('status', status);*/
      
      res.render('cursos', { title: 'Cursos' ,result:result,query:req.query});
      
    })
    .catch(err => {
      console.log(err);
    })
  }else{
    res.redirect('/');
  }  
});


router.get('/:id', function(req, res) {
  console.log(req.query);
  let ok=true,status=200;
  if (req.query.docente != undefined && req.query.docente != '') {
    fetch('http://localhost:8000/api/cursos/'+ req.params.id +'?docente='+req.query.docente)
    .then(result => {
      /*console.log('result',result);
      console.log(result.ok);
        console.log(result.status);
        console.log(result.statusText);
        ok=result.ok;
        status=result.status;    */    
      return result.json();
    })
    .then(result => {
      
      /*
      console.log('json', result);
      console.log('ok',ok);
      console.log('status', status);*/
      
      res.render('curso', { title: 'Curso' ,result:result,query:req.query});
      
    })
    .catch(err => {
      console.log(err);
    })
  }else{
    res.redirect('/');
  }
}); 
module.exports = router;
