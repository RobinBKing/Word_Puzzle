
var vowelCheck = function(sentence) {
  if (sentence.match(/[aeiouAEIOU]/)) {
    return true;
  }
  else{
    return false;
  }
};
//
// var sentenceParse = function(sentence) {
//   var parsedSentence = sentence.split(" ");
//   return parsedSentence;
// }
//
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
//
// //interface
// $(document).ready(function() {
//   $("form#puzzle").submit(function(event) {
//     var converter = pigLatinSentence($("input#englishSentence").val());
//
//     $(".converter").text(converter);
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
