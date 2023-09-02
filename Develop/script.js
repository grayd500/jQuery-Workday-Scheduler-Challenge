// Wrap all code in a call to jQuery
$(function () {

  function updateTime() {

  // current day from jsday'
  let now = dayjs();
  let currentDate = dayjs().format('dddd MMM D, YYYY');
  let currentTime = dayjs().format('h:mm A');

// Concat "Today is " in front of the day
$('#currentDay').text("It is currently " + currentTime + " on " + currentDate);
  }

updateTime();

setInterval(updateTime, 60000);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  function updateBlockColors() {
    // Get the current hour in 24-hour format
    let currentHour = dayjs().hour();  // <== This uses Day.js to get the current hour in 24-hour format
  
    $('.time-block').each(function() {  // <== This jQuery function loops through each element with the class 'time-block'
      let blockHour = parseInt($(this).attr('id').split('-')[1]);  // <== This takes the 'id' attribute of the current time-block and extracts the hour
  
      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');  // <== Adds 'past' class, removes 'present' and 'future'
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');  // <== Adds 'present' class, removes 'past' and 'future'
      } else {
        $(this).removeClass('past present').addClass('future');  // <== Adds 'future' class, removes 'past' and 'present'
      }
    });
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
