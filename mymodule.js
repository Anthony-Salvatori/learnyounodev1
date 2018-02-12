var fs = require('fs');
var path = require("path");

module.exports = function (fileName, searchTerm, callback)
{
    fs.readdir(fileName, function doneReading(err, fileContents)
    {
        if (err)
        {
            return callback(err);
        }
        else
        {
            fileContents = fileContents.filter(function (file) {
            if (path.extname(file) === searchTerm || path.extname(file) === "." + searchTerm) {
                return true;
            }
        });
        return callback(err, fileContents);
        }
      
    });
};
