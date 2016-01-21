
var vowelCheck = function(sentence) {
  if (sentence.match(/[aeiouAEIOU]/)) {
    return true;
  }
  else{
    return false;
  }
};

var convertSentence = function(sentence) {
var puzzleSentence = "";
  if (vowelCheck(sentence)){
    puzzleSentence = sentence.replace(/a/g,'-')
                             .replace(/e/g,'-')
                             .replace(/i/g,'-')
                             .replace(/o/g,'-')
                             .replace(/u/g,'-')
                             .replace(/A/g,'-')
                             .replace(/E/g,'-')
                             .replace(/I/g,'-')
                             .replace(/O/g,'-')
                             .replace(/U/g,'-');
  }
  return puzzleSentence;
};

//interface
$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    var wordPuzzle = convertSentence($("input#englishSentence").val());

    $(".wordPuzzle").text(wordPuzzle);

    $("#result").show();
    event.preventDefault();
  });
});
