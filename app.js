// storing dependencies in variables
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var port = 8081;
var app = express();

app.get('/wikilove', function (req, res) {

    var url = "https://www.wikihow.com/wikiHowTo?search=love";
    var wikihow_data = [];
    var data_length;

    request(url, function (error, response, html) {
        if(!error) {

            var $ = cheerio.load(html);

            $('#searchresults_list').filter(function() {
                data_length = $(this).find('a').length;

                $(this).find('a').each(function (i, element) {
                    var myObj = {
                        url: $(this).attr("href"),
                        title: $(this).find('.result_title').text(),
                        content: []
                    };

                    wikihow_data.push(myObj);
                });
            });
        }

        // checking all the url's on the pages and titles are stored in the wikihow_data
        if(wikihow_data.length >= (data_length - 1)) {

            // using a forEach loop (or for loop) to loop through the wikihow_data array
            wikihow_data.forEach(function(obj, _index) {
                request({
                    // obj refers to each item in the array, in that we can access the url property as we stored that on line 26
                    // with this we access each of the found urls
                    url: obj.url
                }, function(err, resp, data) {
                    if(!err) {

                        var _$ = cheerio.load(data);

                        _$('#bodycontents').filter(function () {
                            // in each article found we store it's intro inside the content property
//                            var stepsNodes = 
                            
                            _$(this).find('.section.steps').each(function(i, elem){
//                                console.log(_$(this).text());
                                obj.content.push($(this).text());
                            });
                            

                        });

                    }
                });
            });
        }

        setTimeout(function(){
            res.send(wikihow_data);

            // per category or word (love, kiss, etc.) change the name and the var name below
            fs.writeFile('wikihow_output_love.js', "var wikihow_data_love = " + JSON.stringify(wikihow_data) + "", function (error) {
                console.log("File is written sucessfully!");
            });
        }, 2500);

    });

});

app.get('/wikikiss', function (req, res) {

    var url = "https://www.wikihow.com/wikiHowTo?search=kiss";
    var wikihow_data = [];
    var data_length;

    request(url, function (error, response, html) {
        if(!error) {

            var $ = cheerio.load(html);

            $('#searchresults_list').filter(function() {
                data_length = $(this).find('a').length;

                $(this).find('a').each(function (i, element) {
                    var myObj = {
                        url: $(this).attr("href"),
                        title: $(this).find('.result_title').text(),
                        content: []
                    };

                    wikihow_data.push(myObj);
                });
            });
        }

        // checking all the url's on the pages and titles are stored in the wikihow_data
        if(wikihow_data.length >= (data_length - 1)) {

            // using a forEach loop (or for loop) to loop through the wikihow_data array
            wikihow_data.forEach(function(obj, _index) {
                request({
                    // obj refers to each item in the array, in that we can access the url property as we stored that on line 26
                    // with this we access each of the found urls
                    url: obj.url
                }, function(err, resp, data) {
                    if(!err) {

                        var _$ = cheerio.load(data);

                        _$('#bodycontents').filter(function () {
                            // in each article found we store it's intro inside the content property
//                            var stepsNodes = 
                            
                            _$(this).find('.section.steps').each(function(i, elem){
//                                console.log(_$(this).text());
                                obj.content.push($(this).text());
                            });
                            

                        });

                    }
                });
            });
        }

        setTimeout(function(){
            res.send(wikihow_data);

            // per category or word (love, kiss, etc.) change the name and the var name below
            fs.writeFile('wikihow_output_kiss.js', "var wikihow_data_kiss = " + JSON.stringify(wikihow_data) + "", function (error) {
                console.log("File is written sucessfully!");
            });
        }, 2500);

    });

});

app.get('/wikifriend', function (req, res) {

    var url = "https://www.wikihow.com/wikiHowTo?search=friend";
    var wikihow_data = [];
    var data_length;

    request(url, function (error, response, html) {
        if(!error) {

            var $ = cheerio.load(html);

            $('#searchresults_list').filter(function() {
                data_length = $(this).find('a').length;

                $(this).find('a').each(function (i, element) {
                    var myObj = {
                        url: $(this).attr("href"),
                        title: $(this).find('.result_title').text(),
                        content: []
                    };

                    wikihow_data.push(myObj);
                });
            });
        }

        // checking all the url's on the pages and titles are stored in the wikihow_data
        if(wikihow_data.length >= (data_length - 1)) {

            // using a forEach loop (or for loop) to loop through the wikihow_data array
            wikihow_data.forEach(function(obj, _index) {
                request({
                    // obj refers to each item in the array, in that we can access the url property as we stored that on line 26
                    // with this we access each of the found urls
                    url: obj.url
                }, function(err, resp, data) {
                    if(!err) {

                        var _$ = cheerio.load(data);

                        _$('#bodycontents').filter(function () {
                            // in each article found we store it's intro inside the content property
//                            var stepsNodes = 
                            
                            _$(this).find('.section.steps').each(function(i, elem){
//                                console.log(_$(this).text());
                                obj.content.push($(this).text());
                            });
                            

                        });

                    }
                });
            });
        }

        setTimeout(function(){
            res.send(wikihow_data);

            // per category or word (love, kiss, etc.) change the name and the var name below
            fs.writeFile('wikihow_output_friend.js', "var wikihow_data_friend = " + JSON.stringify(wikihow_data) + "", function (error) {
                console.log("File is written sucessfully!");
            });
        }, 2500);

    });

});

app.get('/wikitrust', function (req, res) {

    var url = "https://www.wikihow.com/wikiHowTo?search=trust";
    var wikihow_data = [];
    var data_length;

    request(url, function (error, response, html) {
        if(!error) {

            var $ = cheerio.load(html);

            $('#searchresults_list').filter(function() {
                data_length = $(this).find('a').length;

                $(this).find('a').each(function (i, element) {
                    var myObj = {
                        url: $(this).attr("href"),
                        title: $(this).find('.result_title').text(),
                        content: []
                    };

                    wikihow_data.push(myObj);
                });
            });
        }

        // checking all the url's on the pages and titles are stored in the wikihow_data
        if(wikihow_data.length >= (data_length - 1)) {

            // using a forEach loop (or for loop) to loop through the wikihow_data array
            wikihow_data.forEach(function(obj, _index) {
                request({
                    // obj refers to each item in the array, in that we can access the url property as we stored that on line 26
                    // with this we access each of the found urls
                    url: obj.url
                }, function(err, resp, data) {
                    if(!err) {

                        var _$ = cheerio.load(data);

                        _$('#bodycontents').filter(function () {
                            // in each article found we store it's intro inside the content property
//                            var stepsNodes = 
                            
                            _$(this).find('.section.steps').each(function(i, elem){
//                                console.log(_$(this).text());
                                obj.content.push($(this).text());
                            });
                            

                        });

                    }
                });
            });
        }

        setTimeout(function(){
            res.send(wikihow_data);

            // per category or word (love, kiss, etc.) change the name and the var name below
            fs.writeFile('wikihow_output_trust.js', "var wikihow_data_trust = " + JSON.stringify(wikihow_data) + "", function (error) {
                console.log("File is written sucessfully!");
            });
        }, 2500);

    });

});


app.get('/wikitalk', function (req, res) {

    var url = "https://www.wikihow.com/wikiHowTo?search=talk";
    var wikihow_data = [];
    var data_length;

    request(url, function (error, response, html) {
        if(!error) {

            var $ = cheerio.load(html);

            $('#searchresults_list').filter(function() {
                data_length = $(this).find('a').length;

                $(this).find('a').each(function (i, element) {
                    var myObj = {
                        url: $(this).attr("href"),
                        title: $(this).find('.result_title').text(),
                        content: []
                    };

                    wikihow_data.push(myObj);
                });
            });
        }

        // checking all the url's on the pages and titles are stored in the wikihow_data
        if(wikihow_data.length >= (data_length - 1)) {

            // using a forEach loop (or for loop) to loop through the wikihow_data array
            wikihow_data.forEach(function(obj, _index) {
                request({
                    // obj refers to each item in the array, in that we can access the url property as we stored that on line 26
                    // with this we access each of the found urls
                    url: obj.url
                }, function(err, resp, data) {
                    if(!err) {

                        var _$ = cheerio.load(data);

                        _$('#bodycontents').filter(function () {
                            // in each article found we store it's intro inside the content property
//                            var stepsNodes = 
                            
                            _$(this).find('.section.steps').each(function(i, elem){
//                                console.log(_$(this).text());
                                obj.content.push($(this).text());
                            });
                            

                        });

                    }
                });
            });
        }

        setTimeout(function(){
            res.send(wikihow_data);

            // per category or word (love, kiss, etc.) change the name and the var name below
            fs.writeFile('wikihow_output_talk.js', "var wikihow_data_talk = " + JSON.stringify(wikihow_data) + "", function (error) {
                console.log("File is written sucessfully!");
            });
        }, 2500);

    });

});




app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;