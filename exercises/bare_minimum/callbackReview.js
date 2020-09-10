/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
//always give a callback with err first for every function
var pluckFirstLineFromFile = function (filePath, callback) {
  //read whole file
  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      callback(err, null);
    } else {
      //split by line by using '\n', make sure its in quotes
      var fileLines = file.split('\n');
      callback(null, fileLines[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
