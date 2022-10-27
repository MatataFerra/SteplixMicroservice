const Route = require('steplix-microservice/server/routes/list');
// const route = new Route('YourModel', {
//   // Indicates the name of the parameter to search in `req.params`. Default 'id'
//   paramNameId: 'id',

//   // Indicates the validation that will be applied to the parameter. Default 'isInteger'
//   // Possible values:
//   //  Function
//   //    Example:
//   //      function (id, req) { return id > 10; }
//   //  String (https://www.gitlab.com/steplix/steplix-microservice#validator)
//   validatorIdType: 'isInteger'
// });


module.exports = new Route('Currencies').handlerize();
