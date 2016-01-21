
// var vowelCheck = function(word) {
//   if (word.match(/^[aeiouAEIOU]/)) {
//     return true;
//   }
//   else{
//     return false;
//   }
// };
//
// var sentenceParse = function(sentence) {
//   var parsedSentence = sentence.split(" ");
//   return parsedSentence;
// }
//
// var pigLatinSentence = function(sentence) {
//   sentenceParse = sentenceParse(sentence);
//   var pigLatin = "";
//   for(var i = 0; i < sentenceParse.length; i++){
//     pigLatin += " " + translate(sentenceParse[i]);
//   }
//   return puzzleSentence;
// }
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
