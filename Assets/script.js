//Global Variables

function displayTime(){
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
};

setInterval(displayTime,1000);


function pastPresentFuture() {

    var time = 12; //moment().format('H');
    console.log(typeof time);

    var block =  $('.row').attr('id');
    console.log(block);

    if (block == time) {
        $('row').addClass('present');
    } else if (block < time) {
        $('row').addClass('past');
    } else {
        $('row').addClass('future');
    }
};

pastPresentFuture();

/*
Notes:
1. Need to show the date - Done
2. Time blocks for 9-5 - Done
3. Evaluate past, present, and future

4. Colour code past, present, and future
5. Enter text in time block
6. Save button
7. Save button saves text to local storage
8. Saved text stays with each refresh
*/
