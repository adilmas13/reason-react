'use strict';


function isProduction(param) {
  return process.env.NODE_ENV === "production";
}

exports.isProduction = isProduction;
/* No side effect */
