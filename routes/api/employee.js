var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {
    empModel.getEmployees(
      function(err, resultado){
        if(err) {
          console.log(err);
          return res.status(500).json({error:"No se ha podido completar la consulta."});
        }
        return res.status(200).json(resultado);
      }
    );
  });// all

  router.get('/byid/:id', (req, res, next)=>{
    empModel.getEmployeesById(req.params.id, (err, result)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se ha podido obtener el empleado."});
      }
      return res.status(200).json(result);
    } );
  }); // byid

  router.get('/bycompany/:company', (req, res, next)=>{
    empModel.getEmployeesByCompany(req.params.company, (err, result)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se ha podido obtener el empleado."});
      }
      return res.status(200).json(result);
    } );
  }); // bycompany

  router.get('/byagerange/:min/:max', (req, res, next)=>{
    empModel.getEmployeesByAgeRange(req.params.min, req.params.max, (err, result)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se ha podido obtener el empleado."});
      }
      return res.status(200).json(result);
    } );
  }); // byagerange

  router.get('/bytag/:tag', (req, res, next)=>{
    empModel.getEmployeesByTag(req.params.tag, (err, result)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se han podido obtener los empleados."});
      }
      return res.status(200).json(result);
    } );
  }); // bytag


  router.post('/addtag/:id', function(req, res, next){
    empModel.addEmployeeATag(req.body.tag, req.params.id, (err, result)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se pudo agregar el tag."});
      }
      return res.status(200).json(result);
    });


  }); //addtag

  












  return router;
}

module.exports = initEmployee;
