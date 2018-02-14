var http = require("http");
var bl = require('bl');
var jata = [];
var countResult = 0;

for (var i = 2; i < process.argv.length; ++i)
{
    
    http.get(process.argv[i], callback);
}

function callback(response)
{
    response.setEncoding("utf8");
    
    response.pipe(bl(function ( err, data) 
    {
        if (err)
        {
            throw err;
        }
        else 
        {
            jata[countResult] = data.toString;
            countResult++;
            printResult(jata, countResult);
            
            
        }
    }));
}

function printResult (data, countResult)
{
    if (countResult == 3)
    {
        data.forEach(function (data){
           console.log(data); 
        });
    }
}

