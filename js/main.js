$(document).ready(function () {
  // Variables
  var count = parseInt($("#num").html()); // transform num into intiger
  var breakTime = parseInt($("#breakNum").html());

  $("#reset").hide();
  $("#start").click(function () {
    count *= 60;
    breakTime *= 60;
    var counter = setInterval(timer, 1000); // 1000 means one second

    function timer() {
      // Hide variables when clicking Start button
      $("#start, #minus5Clock , #add5Clock, #minus5Break , #add5Break , #breakNum, #title1 , #title2").hide();
      $("#timeType").show();
      $("#timeType").html("Session time:");

      // Itterate count with -1
      count -= 1;
      if (count === 0) {
        // If count hits 0 , stop the countdown
        clearInterval(counter);
        // Set the interval in seconds
        var startBreak = setInterval(breakTimer, 1000);
        // Hide the 0 num after the timer goes to 0
        $("#num").hide();
      }

      // Adding decimals to our num on countdown
      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      }
      else {
        $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);

      }

      // Hiding buttons when break time is on
      function breakTimer() {
        $("#timeType").html("Break time:");
        $("#breakNum").show();
        $("#timeType").show();
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          $("#reset").show();
          $("#breakNum, #timeType").hide();
        }
        // Adding decimals to our num in break
        if (breakTime % 60 >= 10) {
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
        }
        else {
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
        }
      }
    }
  });

  // Reset button
  $("#reset").click(function () { // reset count and break time with Reset button
    count = 25;
    breakTime = 5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #add5Clock, #minus5Clock, #minus5Break, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
    $("#reset, #timeType").hide();

  });

  // Minus 5 button
  $("#minus5Clock").click(function () {
    // While using minus button, decrease time with -5 , but not further below 5
    if (count > 1) {
      count -= 1;
      $("#num").html(count);
    }
  });

  // Add 5 button
  $("#add5Clock").click(function () {
    // While using add button, increase time with +5
    count += 1;
    $("#num").html(count);
  });

  // Minus 5 break button
  $("#minus5Break").click(function () {
    // While using minus button, decrease break time with -5 , but not further below 5
    if (breakTime > 1) {
      breakTime -= 1;
      $("#breakNum").html(breakTime);
    }
  });

  // Add 5 break button
  $("#add5Break").click(function () {
    // While using add button, increase break time with +5
    breakTime += 1;
    $("#breakNum").html(breakTime);
  });
});