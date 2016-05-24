  
  //Variable that will hold the last evaluated answer
  var $lastAns;
  
  $("#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#zero,#dot,#divide,#add,#subtract,#multiply").click(function () {
    //Checks if div has any content
    if ($.trim($("#input span").text()) === "") {
      $("#input span").text($(this).text());
    //If it does, then anything else is appended 
    } else {
     $("#input span").append($(this).text());
    }
  });
  
  //Clear the last element from the text box
  $("#clear").click(function () {
    var data = $("#input span").text().split("");
    data.pop();
    $("#input span").text(data.join(""));
  });

  //Calculate a render operation
  $("#equal").click(function () {
    $("#input span").text(eval($("#input span").text()));
    $lastAns = $("#input span").text();
  });