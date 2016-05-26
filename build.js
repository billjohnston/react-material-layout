var sass = require('node-sass');
var request = require('request');
var async = require('async');
var cleanCss = require('clean-css');
var fs = require('fs');
var prompt = require('prompt');
var _ = require('lodash');

var baseUrl = 'https://raw.githubusercontent.com/angular/material/release/';
var src = [];

prompt.start();
prompt.get(['Material release'], function (err, release){
    async.forEachOfLimit({
        variables:  baseUrl + release['Material release'] + '/src/core/style/variables.scss',
        layoutStyle: baseUrl + release['Material release'] + '/src/core/style/layout.scss',
        layoutAttributes: baseUrl + release['Material release'] + '/src/core/services/layout/layout-attributes.scss',
        layoutService: baseUrl + release['Material release'] + '/src/core/services/layout/layout.scss',
    }, 1, function(url, key, eachCb){
        request(url, function(error, response, body){
            if(!error && response.statusCode == 200){
                if(key === 'layoutAttributes'){
                    body = body.replace(/(\[)(.*?\])/g, '$1data-$2')
                }
                src.push(body);
                eachCb();
            }
            else{
                eachCb(error, response.statusCode);
            }
        })
    }, function(err){
        if(err){
            console.log('Error:', err)
        }
        else{
            sass.render({data: src.join('\n')}, function(err, result){
                if(!err){
                    async.parallel([
                        function(parallelCb){
                            fs.writeFile('./dist/react-material-layout.css', result.css, function(err){
                                if(err){
                                    parallelCb(err);
                                }
                                else{
                                    parallelCb();
                                }
                            });
                        },
                        function(parallelCb){
                            new cleanCss().minify(result.css, function (error, minified) {
                                if(error){
                                    parallelCb(err);
                                }
                                else{
                                    fs.writeFile('./dist/react-material-layout.min.css', minified.styles, function(err){
                                        if(err){
                                            parallelCb(err);
                                        }
                                        else{
                                            parallelCb();
                                        }
                                    });
                                }
                            });
                        }
                    ], function(err){
                        if(err){
                            console.log('Error:', err);
                        }
                        else{
                            console.log('done');
                        }
                    })
                }
                else{
                    console.log('Error:', err.message)
                }
            });
        }
    });
});
