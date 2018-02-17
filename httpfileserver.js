var fs = require('fs');
var map = require('through2-map');
var url = require('url');


var http = require('http'); 
var server = http.createServer(function (req, res) 
    {
        if (req.method !== "GET")
        {
            return res.end('send me a get pls');
        }

       // request handling logic... 
       var gh = url.parse(req.url, true);
        var ll = new Date(gh.query.iso);
        ll = ll.getTime();
       var hour, min, sec, hourIndex, minIndex, secIndex;
 //      ?iso=2018-02-17T21:58:29.650Z
 //      012345678901234567890123
    
    if (gh.pathname.indexOf('r') != -1)
    {
       if (gh.search.indexOf('=') != -1)
       {
           hourIndex = gh.search.indexOf('T');
           hour = Number(gh.search[hourIndex+1] + gh.search[hourIndex+2]);
           minIndex = gh.search.indexOf(':');
           min = Number(gh.search[minIndex+1] +gh.search[minIndex+2]);
           secIndex = gh.search.indexOf(':', minIndex+1);
           sec = Number(gh.search[secIndex+1] + gh.search[secIndex+2]);
       }
       
       var hh = JSON.stringify({
           "hour" : hour,
           "minute" : min,
           "second" : sec
       });
       res.writeHead(200, { 'Content-Type': 'application/json' }) ;
       res.end(hh.toString());
    }
    else
    {
        
        
        var bb = JSON.stringify({
            "unixtime" : ll 
        });
        res.writeHead(200, { 'Content-Type': 'application/json' }) ;
        res.end(bb);
    }
     });  
server.listen(Number(process.argv[2]));  
