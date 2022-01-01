let today = moment();

let dayPlan = [
    {
        thisHour: "09",
        activity: "",
    },
    {
        thisHour: "10",
        activity: "",
    }
]
// function to update current day
let updateDay = () => $("#currentDay").text(today.format("dddd, D MMMM YYYY"));

// update current day
updateDay();

// function to convert hour string to moment object
let momentify = (str) => moment(str + ":00:00", "HH").format("LT");


// create row div + append to container
let createRowDiv = () => {
    let rowDiv = $("<div>").attr({"class": "row"}); 
    $(".container").append(rowDiv);
}

// create hour div
let createHourDiv = (i) => {
    let hourDiv = $("<div>").attr({"class": "hour"});
    $(".row").append(hourDiv);
    hourDiv.text(momentify(dayPlan[i].thisHour));
}

createRowDiv();
createHourDiv(1);