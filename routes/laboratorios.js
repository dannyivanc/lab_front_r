var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* */
router.get('/', function(req, res) {
  res.render('estudiantes', { title: 'Estudiantes', query: req.query });
  
});

router.get('/:id', function(req, res) {
  
  
  //console.log(req.query);
  if (req.query.docente != undefined && req.query.docente != '') {
    fetch('http://localhost:8000/api/laboratorios/' + req.params.id)
    .then(result => {
      //console.log('result',result);
      return result.json();
    })
    .then(result => {
      
      //console.log('json', result);
      //console.log('preg', result.data[0].pregunta);
      if (req.query.tipo == 'rev') {
        return res.render('revisarLab', { title: 'Revision de laboratorio' ,result:result,query:req.query});
        
      }
      res.render('detalleLab', { title: 'Detalle de laboratorio' ,result:result,query:req.query});
      
    })
    .catch(err => {
      console.log(err);
    })
  }else{
    res.redirect('/');
  }

});




module.exports = router;
