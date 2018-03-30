//BUSINESS LOGIC

var Robot = function(num){
var output = "";

  if(num.length % 3 === 0){
    return "Im sorry Dave";
  }else{
    for(let i=0; i<num.length; i++){
      console.log("loop i: ", i);
      console.log("loop [i]: ", num[i]);
      output += num[i];
      
    }  
      // if( i == 0){
      //   console.log("Im before the Beep", i);
      //   console.log("Im before the Beep", num[i]);
      //   i = "Shit";
      //   console.log("Im in the Beep", i);
      // }
      
    }
    
    console.log("Output is:", output);
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
