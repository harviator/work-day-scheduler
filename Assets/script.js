function displayTime(){
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
};

setInterval(displayTime,1000);

/*
Notes:
1. Need to show the date
2. Time blocks for 9-5
3. Evaluate past, present, and future
4. Colour code past, present, and future
5. Enter text in time block
6. Save button
7. Save button saves text to local storage
8. Saved text stays with each refresh
*/