$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    $("#results").text("");
    var number = parseInt($("#number").val());
    var allNumbers = []
    for (var i = 2; i < number; i++) {
      allNumbers.push(i);
    }
    console.log(allNumbers);
    for (var prime = 2; prime < number; prime++) {
      for (var i = 1; i < allNumbers.length; i++) {
        if (allNumbers[i]=== prime) {

        }else if (allNumbers[i]%prime === 0) {
          allNumbers.splice(i,1);
        }
      }
    }

    console.log(allNumbers);
    $(".result").show();
    $("#input").text(number);
    allNumbers.forEach(function(item){
      $("#results").append("<li>" + item + "</li>");
    })
  });
});
