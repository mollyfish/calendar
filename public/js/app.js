'use strict';
$(function() {

  var today = new Date();
  var day = today.getDay() + 1; //Sunday is 0!
  // var day = 5;
  var date = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var month;
  var year = today.getFullYear();
  var monthLength;

  function monthName() {
    switch (mm) {
      case 1:
        month = "January";
        monthLength = 31;
        break;
      case 2:
        month = "February";
        monthLength = 28;
        break;
      case 3:
        month = "March";
        monthLength = 31;
        break;
      case 4:
        month = "April";
        monthLength = 30;
        break;
      case 5:
        month = "May";
        monthLength = 31;
        break;
      case 6:
        month = "June";
        monthLength = 30;
        break;
      case 7:
        month = "July";
        monthLength = 31;
        break;
      case 8:
        month = "August";
        monthLength = 31;
        break;
      case 9:
        month = "September";
        monthLength = 30;
        break;
      case 10:
        month = "October";
        monthLength = 31;
        break;
      case 11:
        month = "November";
        monthLength = 30;
        break;
      case 12:
        month = "December";
        monthLength = 31;
        break;
      default:
        month = "Error retrieving date";
        break;
    }
  }
  function dayName() {
    switch (day) {
      case 1:
        day = "Sunday";
        break;
      case 2:
        day = "Monday";
        break;
      case 3:
        day = "Tuesday";
        break;
      case 4:
        day = "Wednesday";
        break;
      case 5:
        day = "Thursday";
        break;
      case 6:
        day = "Friday";
        break;
      case 7:
        day = "Saturday";
        break;
      default:
        day = "Error retrieving day";
        break;
    }
    console.log('today: ' + day);
  }

  monthName();
  dayName();

    $('.date').each(function(i) {
      if (i < ((monthLength + 1) - parseInt($('#0').text()))) {
        $(this).text(i + (parseInt($('#0').text())));
      } else {
        $(this).text('');
      }
    })

  $('h1#month-name').text(month);
  $('span.checkbox').click(function() {
    $(this).toggleClass('checked');
  })

});