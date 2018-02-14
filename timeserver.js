var net = require('net'); 
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
if (month < 10)
{
    month = "0" + month;
}
var day = date.getDate();
if (day < 10)
{
    day = "0" + day;
}
var hour = date.getHours();
if (hour < 10)
{
    hour = "0" + hour;
}
var min = date.getMinutes();
if (min < 10)
{
    min = "0" + min;
}

var realDate = (year + "-" + month + "-" + day + " " + hour + ":" + min + "\n");

var server = net.createServer(function (socket) 
    {  
       // socket handling logic  
       socket.write(realDate);
       socket.end();
     }) ; 
server.listen(process.argv[2]); 
