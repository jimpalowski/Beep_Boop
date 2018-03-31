//BUSINESS LOGIC

var Robot = function(num){
var output = [];

for(var i = 0; i <= num; i++){

     var string = i.toString();
      
     if(i != 0 && i % 3 === 0){
       output.push("I'm sorry, Dave. I'm afraid i can't do that.");
     }
     else if(string.includes("1")){
        output.push("Boop!");
      
      }
      else if(string.includes("0")){
        output.push("Beep!");
      }
      else{
        output.push(i);
      }

  }
  // console.log(output);
return output;
}





//USER LOGIC

$(document).ready(function(){
  $("#Main").submit(function(event){
    event.preventDefault();
    var userResult = $("#Boop").val();
    console.log(userResult);
    ;
    var Results = Robot(userResult)
    $(".resulting").text(Results);
      
  });
});

