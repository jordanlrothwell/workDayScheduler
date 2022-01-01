let today = moment();

let dayPlan = [
    {
        thisHour: "09",
        activity: "",
    },
    {
        thisHour: "10",
        activity: "",
    },
    {
        thisHour: "11",
        activity: "",
    },
    {
        thisHour: "12",
        activity: "",
    },
    {
        thisHour: "13",
        activity: "",
    },
    {
        thisHour: "14",
        activity: "",
    },
    {
        thisHour: "15",
        activity: "",
    },
    {
        thisHour: "16",
        activity: "",
    },
    {
        thisHour: "17",
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
    return rowDiv
}

// create hour div
let createHourDiv = (i) => {
    let hourDiv = $("<div>").attr({"class": "hour"});
    hourDiv.text(momentify(dayPlan[i].thisHour));
    return hourDiv
}

// create textarea
let createTextArea = () => {
    let textArea = $("<textarea>");
    return textArea
}

// wrapper function
let newRow = (i) => {
    return createRowDiv().append(createHourDiv(i), createTextArea())
}

// appender function
let generateContent = (i) => {
    $(".container").append(newRow(i))
}

// generate content
for (i = 0; i < dayPlan.length; i++) {
    generateContent(i);
}