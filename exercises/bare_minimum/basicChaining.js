
/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');

var Promise = require('bluebird');
var writeFileAsync = Promise.promisify(fs.writeFile);
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  //read first line of file-- parse out username?
  return pluckFirstLineFromFileAsync(readFilePath)
    .then(getGitHubProfileAsync) //no argument required bc it is written into the resolve of previous function/promise
    .then (function (profile) {
      return writeFileAsync(writeFilePath, JSON.stringify(profile)); //remember what you are doing! write file needs a location to save file AND file AND sometimes what encoding it is in-- ie 'utf8'
    });
};
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
