var currentDate = moment().format("dddd MMM Do YYYY")


//Fill in current date
$(".currentDate").text(currentDate);
//populate calendar page
for (let i = 1; i < 25; i++) {
    let currentTime = moment().format("HH");
    let iTime = moment(i, "HH").format("HH");
    console.log(iTime);
    let timeLabel = moment(i, 'HH').format('h a');
    console.log(currentTime)

    // if current time matches, turn row red
    if (currentTime === iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right bg-danger");
    } else if (currentTime < iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right bg-success");
    } else {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right");
    }

    var hourCol1 = $("<div></div>").addClass("col-2  p-3 text-right schedTime").attr('id', 'eventTime').html("<h4>" + timeLabel + "</h4>");
    var hourCol2 = $("<input></input>").addClass(" col-9 d-flex align-top pl-2 pr-2 border-0 p-0 text-top ").attr('id', 'scheduleEvent').attr("type", "text");
    var hourCol3 = $("<button></button>").addClass("col-1 d-flex p-3 bg-info text-light justify-content-center border-0 align-middle").attr('id', 'deleteEvent').html('<span class="material-symbols-outlined align-self-center">save</span>');
    $(".calendar").append(calendarRow);
    calendarRow.append(hourCol1, hourCol2, hourCol3);
};
$('#eventTime').on('click', buildEvent);
$('#scheduleEvent').on('click', buildEvent);
$('#deleteEvent').on('click', clearEvent);


