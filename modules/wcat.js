//*****************************************************************/
// wcat.js
//

exports.wcat = function(filename, callback) {
   fs = require('fs');
   fs.readFile(filename, 'utf8', function (err, data){
      if (err) {
        callback(err);
      } 
        callback(data); 
   }); 
}


