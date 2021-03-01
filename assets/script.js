function update() {
    $('#currentDay').html(moment().format('D. MMMM YYYY h:mm:ss'));
  }
  
  setInterval(update, 1000);