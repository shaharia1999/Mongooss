// console.log(module);

function errorHandler(error) {
    // console.log(error);
    const { name, message, stack } = error;
    // console.log(name, message, stack);
    console.log(name,message);
    // logger.error({
    //   name,
    //   message,
    //   stack,
    // });
    // console.log('Internal server Error');
  }

//   one function export way
  module.exports=errorHandler
// maltifunction 
module.exports.errorHandler=errorHandler
