'use strict';


function print(param) {
  console.log(process.env.NODE_ENV);
  
}

exports.print = print;
/* No side effect */
