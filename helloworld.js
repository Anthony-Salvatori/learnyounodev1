var mymodule = require("./mymodule.js");
var file = process.argv[2];
var searchTerm = process.argv[3];


function logMy(err, data)
{
    
    if (err)
    {
        return;
    }
    
    data.forEach(function(lit) {
    console.log(lit);
    });
}
mymodule(file,searchTerm, logMy);
