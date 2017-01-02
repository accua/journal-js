(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(entryTitle, entryBody, entryDate) {
  this.entryTitle = entryTitle;
  this.entryBody = entryBody;
  this.entryDate = entryDate;
}

Entry.prototype.countVowels = function() {
  var body = this.entryBody;
  var lowercase = body.toLowerCase();
  var vowelsArray = lowercase.match(/[aeiou]/g);
  var vowels = vowelsArray.length;

  return vowels;
};

Entry.prototype.countConsonants = function() {
  var body = this.entryBody;
  var lowercase = body.toLowerCase();
  var consonantsArray = lowercase.match(/[^aeiou]/g);
  var consonants = consonantsArray.length;

  return consonants;
};

Entry.prototype.returnEight = function() {
  var firstEight = this.entryBody.split(' ');
  var output = [];
  for (var i = 0; i <= 7; i++) {
    output.push(firstEight[i]);
  }
  return output.join(" ");
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(function(){
  $('#new-entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var date = $('#date').val();
    var body = $('#body').val();
    var entry = new Entry(title, body, date);
    var numberVowels = entry.countVowels();
    var numberConsonants = entry.countConsonants();
    $('#journalEntry').append("<div class = 'row'>" +
                                "<div class = 'col s8'>" +
                                  "<h3 id='headline'>" + title + "</h3>" +
                                "</div>" +
                                "<div class = 'col s4'>" +
                                  "<h5>" + date + "</h5>" +
                                  "<p>Number of Vowels:" + numberVowels + "</p>" +
                                  "<p>Number of Consonants:" + numberConsonants + "</p>" +
                                "</div>" +
                              "</div>" +
                              "<div class = 'row'>" +
                                "<div id = 'snippet' class = 'col s12'>" +
                                  "<p>" + entry.returnEight() + "</p>" +
                                "</div>" +
                                "<div id = 'entryBody' class = 'col s12'>" +
                                  "<p>" + body + "</p>" +
                              "</div>");
    $('#entryBody').hide();
    $('#headline').click(function() {
      $('#snippet').toggle();
      $('#entryBody').toggle();
    });
  });
});

},{"./../js/entry.js":1}]},{},[2]);
