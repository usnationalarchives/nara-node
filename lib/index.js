
var _       = require('underscore'),
    json    = require('json5'),
    request = require('request');

module.exports = function (version) {
    
    if (typeof version === 'undefined') version = 'v1';

    return function (options, callback) {
        
        _.defaults(options, {
            method:     'GET',            
            headers:    { 'User-Agent': 'nara-node' },
            search:     {}
        });

        // Host
        options.uri         = 'https://catalog.archives.gov/api/' + version;
        options.qs          = options.search;
        options.qs.action  = 'search';

        // Request
        request(options, function (err, resp, body) {            
            if (err) return callback(err);
            body = json.parse(body)['opaResponse']['results']['result'];

            if (parseInt(resp.statusCode, 10) !== 200) return callback(body);
            callback(null, body);
        });
    }; 
};