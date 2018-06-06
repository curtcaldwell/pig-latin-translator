// business logic
/*var translate = function(word) {
    var inputLetters = word.split("");
    var vowels = ["a", "e","i","o", "u"];
    var position = vowels.indexOf(inputLetters[0]); //-1

    if (position > -1) {
      //first letter vowel logic goes here
      return word += "way";
    } else {
      //consonant first logic goes here
      return   word += "ay";
    }
  }
*/
/*
  var pigify = function(word) {

  var vowels = ["a", "e", "i", "o", "u"];

  for (var i=0; i < word.length; i++) {
    if ((vowels.indexOf(word[i])) != -1) {

      if ((word[i] === "u") && (word[i-1] === "q")) {
        var slice_point = i+1;
      } else {
        var slice_point = i;
      }

      var first_letters = word.slice(0, slice_point);
      var remainder = word.slice(slice_point, word.length);
      var piggy = remainder + first_letters + 'ay';

      return piggy;
    }
  }
};

*/
/*
    for (var i = 0; i < word.length; i++){
      if words.charAt(0) === vowels.indexOf()>= 0 {
        words += ("way");
      };
    };
      for (var i = 0; i < word.length; i++){
        if word.charAt(0) !== ["a", "e","i","o", "u"]{
          word.charAt(0).split().reverse();
        }
      }
    };
};

*/

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    //var year = $("input#year").val();
    var result = pigify ($("input#year").val());
    debugger;
    function(word) {

    var vowels = ["a", "e", "i", "o", "u"];

    for (var i=0; i < word.length; i++) {
      if ((vowels.indexOf(word[i])) != -1) {

        if ((word[i] === "u") && (word[i-1] === "q")) {
          var slice_point = i+1;
        } else {
          var slice_point = i;
        }

        var first_letters = word.slice(0, slice_point);
        var remainder = word.slice(slice_point, word.length);
        var piggy = remainder + first_letters + 'ay';

        return piggy;
      }
    }
  });
    $("#result").show(piggy);
  });
});
