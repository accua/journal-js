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
