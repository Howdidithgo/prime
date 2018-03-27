var createArray = function(number, array) {
  for (var i = 2; i < number; i++) {
    array.push(i);
  }
}
var findPrimes = function(number, array) {
  for (var prime = 2; prime < number; prime++) {
    for (var i = 1; i < array.length; i++) {
      if (array[i]=== prime) {

      }else if (array[i]%prime === 0) {
        array.splice(i,1);
      }
    }
  }
}

$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    $("#results").text("");
    var number = parseInt($("#number").val());
    var allNumbers = []
    createArray(number, allNumbers);
    
    findPrimes(number, allNumbers);

    $(".result").show();
    $("#input").text(number);
    allNumbers.forEach(function(item){
      $("#results").append("<li>" + item + "</li>");
    })
  });
});
