// clock and timer
function update() {
    $('#currentDay').html(moment().format('D. MMMM YYYY h:mm:ss'));
  }
  
  setInterval(update, 1000);

  // save to local storage
  $("#savebtn9").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn10").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn11").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn12").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn1").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn2").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn3").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  $("#savebtn4").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.setItem(hour, input);
  });

  // changing the color of the text input field depending on the time
  if ((moment().format("h")) > 9) {
    $(text9).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 9) {
    $(text9).css("background-color", "green");
  } else if ((moment().format("h")) == 9) {
    $(text9).css("background-color", "red");
  }

  if ((moment().format("h")) > 10) {
    $(text10).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 10) {
    $(text10).css("background-color", "green");
  } else if ((moment().format("h")) == 10) {
    $(text10).css("background-color", "red");
  }

  if ((moment().format("h")) > 11) {
    $(text11).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 11) {
    $(text11).css("background-color", "green");
  } else if ((moment().format("h")) == 11) {
    $(text11).css("background-color", "red");
  }

  if ((moment().format("h")) > 12) {
    $(text12).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 12) {
    $(text12).css("background-color", "green");
  } else if ((moment().format("h")) == 12) {
    $(text12).css("background-color", "red");
  }

  if ((moment().format("h")) > 1) {
    $(text1).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 1) {
    $(text1).css("background-color", "green");
  } else if ((moment().format("h")) == 1) {
    $(text1).css("background-color", "red");
  }

  if ((moment().format("h")) > 2) {
    $(text2).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 2) {
    $(text2).css("background-color", "green");
  } else if ((moment().format("h")) == 2) {
    $(text2).css("background-color", "red");
  }

  if ((moment().format("h")) > 3) {
    $(text3).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 3) {
    $(text3).css("background-color", "green");
  } else if ((moment().format("h")) == 3) {
    $(text3).css("background-color", "red");
  }

  if ((moment().format("h")) > 4) {
    $(text4).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 4) {
    $(text4).css("background-color", "green");
  } else if ((moment().format("h")) == 4) {
    $(text4).css("background-color", "red");
  }

  if ((moment().format("h")) > 5) {
    $(text5).css("background-color", "lightgray");
  } else if ((moment().format("h")) < 5) {
    $(text5).css("background-color", "green");
  } else if ((moment().format("h")) == 5) {
    $(text5).css("background-color", "red");
  }

  