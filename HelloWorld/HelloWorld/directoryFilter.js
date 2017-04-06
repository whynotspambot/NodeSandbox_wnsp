var fs = require('fs')
var path = require('path')

module.exports = function directoryFilter(directoryName, extensionFilter, callback) {
    fs.readdir(directoryName, function (err, files) {
        if (err) return callback(err)
        var filteredFiles = []
        files.forEach(function (file) {
            if (path.extname(file) === '.' + extensionFilter) {
                filteredFiles.push(file)
            }
        })

        callback(null, filteredFiles)
        //files = files.filter(function (file) {
        //    return path.extname(file) === '.' + extensionFilter
        //})
        //callback(null, files)
    })
}