let today = moment();

let dayPlan = [
    {
        hour: "09",
        activity: "",
    },
    {
        hour: "10",
        activity: "",
    }
]
// function to update current day
let updateDay = () => $("#currentDay").text(today.format("dddd, D MMMM YYYY"));

// update current day
updateDay();

// create row
let createRow = function() {
    let hourRow = $("<div>").attr({"class": "row"});
    $(".container").append(hourRow)
}

createRow();