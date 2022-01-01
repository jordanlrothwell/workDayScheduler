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
// Set value for currentDay
let updateDay = () => $("#currentDay").text(today.format("dddd, D MMMM YYYY"));

updateDay();