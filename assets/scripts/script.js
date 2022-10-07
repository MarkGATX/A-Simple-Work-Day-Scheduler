var currentDate = moment().format("dddd MMM Do YYYY");


//Fill in current date
$(".currentDate").text(currentDate);
//populate calendar page
for (let i = 0; i < 24; i++) {
    //use moment.js to log times in first column and compare to current time
    let currentTime = moment().format("HH MMMM Do");
    let iTime = moment(i, "HH MMMM Do").format("HH MMMM Do");
    let timeLabel = moment(i, 'HH').format('h a');
    // change color based on whether time is before, at, or after current hour
    if (currentTime === iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right bg-danger");
    } else if (currentTime < iTime) {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right bg-success");
    } else {
        var calendarRow = $("<section></section>").addClass("row containerRow border border-dark border-left-0 rounded-right lightgrey");
    };
    var hourCol1 = $("<div></div>").addClass("col-2  p-3 text-right bg-light schedTime pt-4 align-baseline").attr('id', 'eventTime' + i).html("<h4>" + timeLabel + "</h4>");
    var hourCol2 = $("<input></input>").addClass(" col-8 d-flex align-top pl-2 pr-2  border-0 p-0 text-top text-light  bg-transparent align-baseline").attr('id', 'scheduleEvent' + i).attr("type", "text");
    var hourCol3 = $("<button></button>").addClass("col-1 d-flex p-3 darkteal text-light justify-content-center border-0 align-middle").attr('id', 'clearEvent').html('<span class="material-symbols-outlined align-self-center">delete</span>');
    var hourCol4 = $("<button></button>").addClass("col-1 d-flex p-3 bg-info text-light justify-content-center border-0 align-middle").attr('id', 'saveEvent').html('<span class="material-symbols-outlined align-self-center">save</span>');
    //populate schedule with saved events
    var scheduledEvent = JSON.parse(localStorage.getItem("savedEvents"));
    if (scheduledEvent === null) {
        scheduledEvent = [];
        localStorage.setItem("savedEvents", JSON.stringify(scheduledEvent));
    }
    for (let i = 0; i < scheduledEvent.length; i++) {
        if (scheduledEvent[i][0] === timeLabel) {
            hourCol2.val(scheduledEvent[i][1]);
        }
    };
    // append html elements
    $(".calendar").append(calendarRow);
    //if calendar row has light background, change text from light to dark
    if (calendarRow.hasClass('lightgrey')) {
        hourCol2.removeClass('text-light').addClass('text-secondary');
    };
    calendarRow.append(hourCol1, hourCol2, hourCol3, hourCol4);

};


// start event listeners
$('#calendarContainer').on('click', '#saveEvent', storeEvent);
$('#calendarContainer').on('click', '#clearEvent', clearEvent);


function storeEvent(e) {
    // check for any saved values
    var scheduledEvent = JSON.parse(localStorage.getItem("savedEvents"));
    //initialize events variable if doesn't already exist in local storage
    if (scheduledEvent === null) {
        scheduledEvent = [];
        localStorage.setItem("savedEvents", JSON.stringify(scheduledEvent));
    };
    // get text input values and values of time
    var clicked = e.target.closest('#saveEvent');
    var clickedEventData = clicked.previousSibling.previousSibling.value;
    //If event field is blank, stop
    if (clickedEventData === "") {
        e.target.blur();
        return
    }
    //If event in the past, open modal saying no past events and clear input
    if (clicked.closest('.lightgrey') !== null) {
        $('#noPastEvents').modal();
        clicked.previousSibling.previousSibling.value = "";
        return;
    }

    var clickedEventTime = clicked.previousSibling.previousSibling.previousSibling.textContent;
    for (let i = 0; i < scheduledEvent.length; i++) {
        if (scheduledEvent[i].includes(clickedEventTime)) {
            scheduledEvent[i] = [clickedEventTime, clickedEventData, moment()];
            localStorage.setItem("savedEvents", JSON.stringify(scheduledEvent));
            e.target.blur();
            return;
        };
    };
    //put time and event data in new arry
    var newEvent = [clickedEventTime, clickedEventData, moment().format('MMM Do YY')];
    //push newEvents into existing event array
    scheduledEvent.push(newEvent);
    localStorage.setItem("savedEvents", JSON.stringify(scheduledEvent));
    e.target.blur();
};

function clearEvent(e) {
    //get local storage
    var scheduledEvent = JSON.parse(localStorage.getItem("savedEvents"));
    //get button pushed
    var clicked = e.target.closest('#clearEvent');
    // get event time 
    var clickedEventTime = clicked.previousSibling.previousSibling.textContent;
    //compare event time to arrays, when there's a match delete that array element
    for (let i = 0; i < scheduledEvent.length; i++) {
        if (clickedEventTime === scheduledEvent[i][0]) {
            scheduledEvent.splice(i, 1);
        }
    }
    //push modified array to local storage
    localStorage.setItem("savedEvents", JSON.stringify(scheduledEvent));
    //clear text input on screen
    clicked.previousSibling.value = "";
}


