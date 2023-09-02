// Wrap all code in a call to jQuery
$(function () {

updateTime();
updateBlockColors();
setInterval(updateBlockColors, 60000);
setInterval(updateTime, 60000);

  function updateTime() {

  // current day from jsday'
  let now = dayjs();
  let currentDate = dayjs().format('dddd MMM D, YYYY');
  let currentTime = dayjs().format('h:mm A');

// Concat "Today is " in front of the day
$('#currentDay').text("It is currently " + currentTime + " on " + currentDate);
  }

  // Check for previously stored text in local storage
  $('.time-block').each(function() {
    let timeBlockId = $(this).attr('id');
    let savedText = localStorage.getItem(timeBlockId);
    if (savedText) {
      $(this).find('textarea').val(savedText);
    }
  });
 
  //
  $(".saveBtn").click(function() {
    let timeBlockId = $(this).parent().attr('id'); // target associated timeblock
    let textAreaContent = $(this).parent().find('textarea').val(); // get the text input
    localStorage.setItem(timeBlockId, textAreaContent); // set ID & text to local
  });

  function updateBlockColors() {
    // Get the current hour in 24-hour format
    let currentHour = dayjs().hour();
  
    $('.time-block').each(function() {  
      let blockHour = parseInt($(this).attr('id'));        
      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');  
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');  
      } else {
        $(this).removeClass('past present').addClass('future');  
      }
    });
  }
});
