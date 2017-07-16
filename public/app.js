'use strict';
var learnjs = {};

learnjs.problemView = function() {
    return $('<div class="problem-view">').text('Coming soon!');
}

learnjs.showView = function(hash) {
    var routes = {
        '#problem': learnjs.problemView
    };
    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}
/*
learnjs.showView = function(hash) {
    var routes = {
        '#problem-1': learnjs.problemView
    };
    var viewFn = routes[hash];
    if (viewFn) {
        $('.view-container').empty().append(viewFn());
    }
}
*/
/*
learnjs.showView = function(hash) {
    var problemView = $('<div class="problem-view">').text('Coming soon!');
    $('.view-container').empty().append(problemView);
}
*/
