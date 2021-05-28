//Global Variables
var saveBtn = $('.saveBtn');
var text = $('textarea');
console.log(text);

var sched = localStorage.getItem("sched");

text.text() = sched;

//Function to display the day and time
function displayTime(){
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
};

setInterval(displayTime,1000);

//Function to colour code the time blocks.
function pastPresentFuture() {

    $('.row').each(function() {
        
        var time = moment().format('H');

        var block =  $(this).attr('id');
    
        if (block == time) {
            $(this).addClass('present');
        } else if (block < time) {
            $(this).addClass('past');
        } else {
            $(this).addClass('future');
        }
    })
};

pastPresentFuture();

//Save text to local storage when save button is clicked
function saveText(event) {
    text.text() = sched;
    localStorage.setItem("sched", sched);
}

saveBtn.on('click', saveText());

/*
Notes:
1. Need to show the date - Done
2. Time blocks for 9-5 - Done
3. Evaluate past, present, and future - Done
4. Colour code past, present, and future - Done
5. Enter text in time block - Done
6. Save button - Done
7. Save button saves text to local storage
8. Saved text stays with each refresh

Issues:
1. Green background colors extents behind save button
2. 9am is green all times (from yesterday evening to this morning.  This morning all the blocks should be green but they aren't)

*/
