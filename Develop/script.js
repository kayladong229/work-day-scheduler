// Current date shows up upon loading scheduler
var currentDayEl = $('#currentDay');
var today = moment();
currentDayEl.text(today.format("dddd MMMM D, YYYY"));

//Color-code time blocks depending on time of day
function colorTimeBlock() {
    //Acquire time that website is initially visited
    var currentHour = today.hour();

    //Loop over time blocks
    $(".time-block").each(function() {
        //Retrieve the time of the block based on the given ID
        var blockHour = parseInt($(this).attr("id"));
        //Set classes depending on when the selected block hour is relative to the time the website is visited
        if (currentHour > blockHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (currentHour === blockHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}

colorTimeBlock();

//Declare new variable for each save button
var saveBtn = $('.saveBtn');

//Create a function that saves time and event to local storage when save button is clicked
saveBtn.on("click", function() {
    var time = $(this).parent().attr("id");
    var event = $(this).siblings(".description").val();
    localStorage.setItem(time, event);
})

//Retrieve any saved events upon refreshing
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));