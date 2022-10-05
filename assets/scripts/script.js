var currentDate = moment().format("dddd MMM Do YYYY")


//Fill in current date
$(".currentDate").text(currentDate);
//populate calendar page
for (let i = 1; i < 25; i++) {
    let currentTime = moment().format("HH");
    let iTime = moment(i, "HH").format("HH");
   console.log(iTime);
    let timeLabel = moment( i , 'HH').format('h a'); 
    console.log(currentTime)
    
  // if current time matches, turn row red
    if (currentTime === iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right bg-danger");
    } 
    else if (currentTime < iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right bg-success");
    } else {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right");
    }

    var hourCol1 = $("<div></div>").addClass("col-2  p-3 text-right schedTime").attr('id','eventTime').html("<h4>" + timeLabel + "</h4>");
    var hourCol2 = $("<a></a>").addClass(" col-9 border-left border-right border-dark p-3 ").attr('id', 'scheduleEvent');
    var hourCol3 = $("<a></a>").addClass("col-1  p-3 ").attr('id', 'deleteEvent');
    $(".calendar").append(calendarRow);
    calendarRow.append(hourCol1, hourCol2, hourCol3);
};
$('#eventTime').on('click', buildEvent);
$('#scheduleEvent').on('click', buildEvent);
$('#deleteEvent').on('click', clearEvent);
