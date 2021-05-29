//Global Variables
var saveBtn = $('.saveBtn');

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
            $(this).children().eq(1).addClass('present');
        } else if (block < time) {
            $(this).children().eq(1).addClass('past');
        } else {
            $(this).children().eq(1).addClass('future');
        }
    })
};

pastPresentFuture();

//Save text to local storage when save button is clicked
function saveText() {

    var hour = $(this).parents().attr('id');
    var sched = $(this).siblings().eq(1).val();
    console.log(hour);
    console.log(sched);
    
    localStorage.setItem(hour, sched);
}

function Load() {

    $('#09').children().eq(1).val(localStorage.getItem('09'));
    $('#10').children().eq(1).val(localStorage.getItem('10'));
    $('#11').children().eq(1).val(localStorage.getItem('11'));
    $('#12').children().eq(1).val(localStorage.getItem('12'));
    $('#13').children().eq(1).val(localStorage.getItem('13'));
    $('#14').children().eq(1).val(localStorage.getItem('14'));
    $('#15').children().eq(1).val(localStorage.getItem('15'));
    $('#16').children().eq(1).val(localStorage.getItem('16'));
    $('#17').children().eq(1).val(localStorage.getItem('17'));
    
}

Load()
saveBtn.on('click', saveText);

