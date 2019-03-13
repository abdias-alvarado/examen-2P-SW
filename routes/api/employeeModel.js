var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');
  lib.getEmployees = (handler)=>{
    // implementar
    // obtener todos los documentos
    empColl.find({}).toArray(
      (err , resultado) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, resultado);
        }
      }
     );
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    // implementar
    // Obtener un Documento solo mostrar
    // email, phone, name y age
    empColl.find({"_id": ObjectID(id)}).project({'email':1, 'phone':1, 'name':1, 'age':1}).toArray(
      (err , resultado) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, resultado);
        }
      }
     );

    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
    // implementar
    // solo mostrar name, email, company
    empColl.find({"company": company}).project({'name':1, 'email':1, 'company':1}).toArray(
      (err , resultado) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, resultado);
        }
      }
     );

    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
    //implementar
    // Mostrar todos los documento incluyendo los extremos
    // que esten entre las edades indicadas por los parametros
    // ageLowLimit y ageHighLimit
    // solo mostrar name, age, email
    empColl.find({"age": { "$gte": parseInt(ageLowLimit), "$lte": parseInt(ageHighLimit)}}).project({'name':1, 'age':1, 'email':1}).toArray(
      (err , resultado) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, resultado);
        }
      }
     );



    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    //implementar
    // obtener todos los documentos que contenga
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
