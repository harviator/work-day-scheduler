function displayTime(){
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
};

setInterval(displayTime,1000);