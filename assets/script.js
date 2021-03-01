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

  
  
  $("#clearbtn5").on("click", function() {
    
    var input = $(this).siblings(".form-control").val();
    var hour = $(this).siblings().attr("id");

    localStorage.clear(hour, input);
  });

  