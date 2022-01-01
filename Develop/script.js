let today = moment();

let dayPlan = [
  {
    index: "0",
    thisHour: "09",
    description: "",
  },
  {
    index: "1",
    thisHour: "10",
    description: "",
  },
  {
    index: "2",
    thisHour: "11",
    description: "",
  },
  {
    index: "3",
    thisHour: "12",
    description: "",
  },
  {
    index: "4",
    thisHour: "13",
    description: "",
  },
  {
    index: "5",
    thisHour: "14",
    description: "",
  },
  {
    index: "6",
    thisHour: "15",
    description: "",
  },
  {
    index: "7",
    thisHour: "16",
    description: "",
  },
  {
    index: "8",
    thisHour: "17",
    description: "",
  },
];

// check for existing descriptions
let checkExisting = () => {
    let existingPlan = JSON.parse(localStorage.getItem("dayPlan"));
    if (existingPlan) {
        dayPlan = existingPlan;
    }
}

// save description to object
let saveDescription = (i, ID) => dayPlan[i].description = $(ID).val();

// save object to local storage
let saveDay = () => localStorage.setItem("dayPlan", JSON.stringify(dayPlan));

// update current day
let updateHeader = () => $("#currentDay").text(today.format("dddd, D MMMM YYYY"));

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
  let giveID = "textID-" + i;
  let textArea = $("<textarea>").attr({
    id: giveID,
    class: "col-md-9 description p-0",
  });
  let givenHour = makeHour(makeMoment(dayPlan[i].thisHour));
  let currentHour = today.format("HH");
  // style text area based on whether past, present or future timeblock
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
let createSaveButton = (i) => {
  let saveButton = $("<button>").attr({ class: "col-md-1 save-button" });
  // add event listener
  saveButton.click(function () {
    let siblingTextID = "#textID-" + i;
    saveDescription(i, siblingTextID);
    saveDay();
  });
  return saveButton;
};

// wrapper function
let newRow = (i) => {
  return createRowDiv().append(
    createHourDiv(i),
    createTextArea(i),
    createSaveButton(i)
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

updateHeader();
checkExisting();