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
