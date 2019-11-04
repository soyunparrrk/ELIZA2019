// storing dependencies in variables
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var port = 8081;
var app = express();

// wikipedia
//app.get('/wikipeida', function (req, res) {
//    var url = "https://en.wikipedia.org/wiki/Dog";
//    request(url, function (error, response, html) {
//        if (!error) {
//
//            var wiki_data = {
//                title: '',
//                img: '',
//                paragraph: ''
//
//            };
//
//            var $ = cheerio.load(html);
//
//            $('#content').filter(function () {
//                wiki_data.title = $(this).find('h1').text();
//                wiki_data.img = $(this).find('img').first().attr('src');
//                wiki_data.paragraph = $(this).find('p').text();
//            });
//
//            res.send(wiki_data);
//        }
//    });
//});

// imdb
//app.get('/imdb', function (req, res) {
//    var url = "https://www.imdb.com/chart/top";
//    request(url, function (error, response, html) {
//        if (!error) {
//
//            var imdb_data = [];
//
//            var $ = cheerio.load(html);
//
//            $('.lister').filter(function () {
//                $(this).find('tr').each(function (i, element) {
//                    imdb_data[i] = "'" + $(this).find('img').attr('src') + "'";
//                });
//
//
//            });
//
//            res.send(imdb_data);
//            fs.writeFile('imdb_output.js', "var imdb_output = [" + imdb_data + "]", function (error) {
//                console.log("File is written sucessfully!");
//            });
//        }
//    });
//});

// wikihow (working)
//app.get('/wikihow', function (req, res) {
//    var url = "https://www.wikihow.com/wikiHowTo?search=love";
//    request(url, function (error, response, html) {
//        if (!error) {
//
//            var wikihow_data = [];
//
//            var $ = cheerio.load(html);
//
//            $('#searchresults_list').filter(function () {
//                $(this).find('a').each(function (i, element) {
//                    var myObj = {
//                        url: $(this).attr("href"),
//                        title: $(this).find('.result_title').text(),
//                        content: {}
//                    }
//                    wikihow_data.push(myObj);
//                });
//
//
//            });
//
//            res.send(wikihow_data);
//            fs.writeFile('wikihow_output.js', "var wikihow_output = " + JSON.stringify(wikihow_data) + "", function (error) {
//                console.log("File is written sucessfully!");
//            });
//        }
//    });
//  
//});
var wikilove_urls = [];
var wikilove_data = [];

app.get('/wikilove', function (req, res) {
    var url = "https://www.wikihow.com/wikiHowTo?search=love";
    //    var url2 = "https://www.wikihow.com/Love";

    request(url, function (error, response, html) {
        if (!error) {

            var $ = cheerio.load(html);

            $('#searchresults_list').filter(function () {
                $(this).find('a').each(function (i, element) {
                    var myObj = {
                        url: $(this).attr("href"),
                        title: $(this).find('.result_title').text(),
                        content: {}
                    }
                    wikilove_urls.push($(this).attr("href"));
                    wikilove_data.push(myObj);
                });
            });
        }
        res.send(wikilove_urls);
        fs.writeFile('wikihow_output.js', "var wikilove_data = " + JSON.stringify(wikilove_data) + "", function (error) {
            console.log("File is written sucessfully!");
        });
    });


});

app.get('/wikilovecontent', function (req, res) {
    //    var url2 = "https://www.wikihow.com/Love";

    wikilove_urls.forEach(function (thisUrl) {
        console.log(thisUrl);
        request({
            url: thisUrl
        }, function (error, response, html) {

            if (!error) {
                
                console.log(html);
//                var wikihow_data2 = [];
//                var $ = cheerio.load(html);
//                $('#bodycontents').filter(function () {
//                    $(this).find('#intro').filter(function (i, element) {
//                        var myObj2 = {
//                            title: $(this).find('p').text()
//                        }
////                        wikihow_data2.push(myObj2);
//                        console.log($(this).text());
//                    });
//                });
//                res.send(wikihow_data2);
//                fs.writeFile('wikihow_output_2.js', "var wikihow_output = " + JSON.stringify(wikihow_data2) + "", function (error) {
//                    console.log("File is written sucessfully!");
//                });
            }
        });

    })


});


//app.get('/wikihow3', function (req, res) {
//    var keywords = [“love”, “cry”, “hug”];
//    var url = "http://www.wikihow.com/wikiHowTo?search=";
//    var urls = [];
//    for (word in keywords) {
//        http.get("https://www.wikihow.com/")
//    }
//});







//app.get('/wikihow/love', function (req, res) {
//    var url = "https://www.wikihow.com/Love";
//    request(url, function (error, response, html) {
//        if (!error) {
//
//            var wikihow_love_data = [];
//
//            var $ = cheerio.load(html);
//
//            $('#searchresults_list').filter(function () {
//                $(this).find('.section steps   sticky  steps_first').each(function (i, element) {
//                    var myObj = {
//                        title: $(this).find('.mw-headline').text(),
//                        content: {}
//                    }
//                    wikihow_love_data.push(myObj);
//                });
//
//
//            });
//
//            res.send(wikihow_love_data);
//            fs.writeFile('wikihow_love_output.js', "var wikihow_output = " + JSON.stringify(wikihow_love_data) + "", function (error) {
//                console.log("File is written sucessfully!");
//            });
//        }
//    });
//});


app.listen(port);
console.log('Magic happens on port' + port);
exports = module.exports = app;