$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var answers = ["person1", "person2", "animal", "exclamation", "verb", "noun", "guy"];
/*
forEach LOOP
    answers.forEach(function(answer) {
      var userInput = $("input#" + answer).val();
      $("." + answer).text(userInput);
    });
*/

// FOR LOOP
    for (i = 0; i < answers.length; i++) {
      var userInput = $("input#" + answers[i]).val();
      $("." + answers[i]).text(userInput);
    };
/*
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
*/

    $("#story").show();

    event.preventDefault();
  });
});
