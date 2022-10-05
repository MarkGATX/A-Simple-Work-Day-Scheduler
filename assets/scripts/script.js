var currentDate = moment().format("dddd MMM Do YYYY")


//Fill in current date
$(".currentDate").text(currentDate);
//populate calendar page
for (let i = 1; i < 25; i++) {
    let currentTime = moment().format("h a");
    var calendarRow = $("<section></section>").addClass("row containerRow ");
    if (i === 12) {
        let hour = 12 + " pm";
        var hourCol1 = $("<div></div>").addClass("col-2 border border-dark rounded-left p-2 text-right").text(hour);
        if (currentTime === hour) {
            calendarRow = $("<section></section>").addClass("row containerRow bg-success");
        }
    } else if (i === 24) {
        let hour = 12 + " am";
        var hourCol1 = $("<div></div>").addClass("col-2 border border-dark rounded-left p-2 text-right").text(hour);
        if (currentTime === hour) {
            calendarRow = $("<section></section>").addClass("row containerRow bg-success");
        }
    } else if (i > 12) {
        let hour = i - 12 + " pm";
        var hourCol1 = $("<div></div>").addClass("col-2 border border-dark rounded-left p-2 text-right").text(hour);
        if (currentTime === hour) {
            calendarRow = $("<section></section>").addClass("row containerRow bg-success");
        }
    }
    else {
        let hour = i + " am";
        var hourCol1 = $("<div></div>").addClass("col-2 border border-dark rounded-left p-2 text-right").text(hour);
        if (currentTime === hour) {
            calendarRow = $("<section></section>").addClass("row containerRow bg-success");
        }
    };
    var hourCol2 = $("<div></div>").addClass("border border-dark col-8 p-2");
    var hourCol3 = $("<div></div>").addClass("col-2 border border-dark rounded-right p-2");
    $(".calendar").append(calendarRow);
    calendarRow.append(hourCol1, hourCol2, hourCol3);
};

// for (let i = 1; i < 25; i++) {
//     let currentTime = moment().format("h a");
//     // console.log(currentTime);
//     if (currentTime === )