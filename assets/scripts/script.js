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
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark rounded bg-danger");
    } 
    else if (currentTime < iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark rounded bg-success");
    } else {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark rounded");
    }

    var hourCol1 = $("<div></div>").addClass("col-2  p-2 text-right schedTime").attr('id','eventTime').text(timeLabel);
    var hourCol2 = $("<a></a>").addClass(" col-9 border-left border-right border-dark p-2 ").attr('id', 'scheduleEvent');
    var hourCol3 = $("<a></a>").addClass("col-1  p-2 ").attr('id', 'deleteEvent');
    $(".calendar").append(calendarRow);
    calendarRow.append(hourCol1, hourCol2, hourCol3);
};
$('#eventTime').on('click', buildEvent);
$('#scheduleEvent').on('click', buildEvent);
$('#deleteEvent').on('click', clearEvent);
