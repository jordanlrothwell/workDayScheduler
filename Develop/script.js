let today = moment();

let dayPlan = [
  {
    thisHour: "09",
    description: "",
  },
  {
    thisHour: "10",
    description: "",
  },
  {
    thisHour: "11",
    description: "",
  },
  {
    thisHour: "12",
    description: "",
  },
  {
    thisHour: "13",
    description: "",
  },
  {
    thisHour: "14",
    description: "",
  },
  {
    thisHour: "15",
    description: "",
  },
  {
    thisHour: "16",
    description: "",
  },
  {
    thisHour: "17",
    description: "",
  },
];
// function to update current day
let updateDay = () => $("#currentDay").text(today.format("dddd, D MMMM YYYY"));

// update current day
updateDay();

// functions to create or format moments
let makeMoment = (str) => moment(str, "HH");
let makeAMorPM = (moment) => moment.format("LT");
let makeHour = (moment) => moment.format("HH");

// past/present/future colour functions
let makePast = (element) => element.addClass("past");
let makePresent = (element) => element.addClass("present");
let makeFuture = (element) => element.addClass("future");

// create row div + append to container
let createRowDiv = () => {
  let rowDiv = $("<div>").attr({ class: "row" });
  return rowDiv;
};

// create hour div
let createHourDiv = (i) => {
  let hourDiv = $("<div>").attr({ class: "col-md-2 hour" });
  hourDiv.text(makeAMorPM(makeMoment(dayPlan[i].thisHour)));
  return hourDiv;
};

// create textarea
let createTextArea = (i) => {
  let textArea = $("<textarea>").attr({ class: "col-md-9 description p-0" });
  let givenHour = makeHour(makeMoment(dayPlan[i].thisHour));
  let currentHour = today.format("HH");
  if (currentHour > givenHour) {
    makePast(textArea);
  } else if (currentHour == givenHour) {
    makePresent(textArea);
  } else {
    makeFuture(textArea);
  }
  return textArea;
};

// create save button
let createSaveButton = () => {
  let saveButton = $("<button>").attr({ class: "col-md-1 saveButton" });
  return saveButton;
};

// wrapper function
let newRow = (i) => {
  return createRowDiv().append(
    createHourDiv(i),
    createTextArea(i),
    createSaveButton()
  );
};

// appender function
let generateContent = (i) => {
  $(".container").append(newRow(i));
};

// generate content
for (i = 0; i < dayPlan.length; i++) {
  generateContent(i);
}