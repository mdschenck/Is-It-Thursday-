var mainContent = document.getElementById("main");

var todayIs = moment().format("dddd");

//format("dddd, MMMM Do YYYY");
console.log(todayIs);

function isItOrIsntIt() {
  if (todayIs === "Thursday") {
    console.log("THURSDAY!");
    var displayDay = document.createElement("div");
    displayDay.setAttribute("class", "row");
    displayDay.innerHTML = `
<h1> IT IS THURSDAY! </h1>
    `;
    mainContent.append(displayDay);
  } else {
    console.log("NOT THURSDAY!");
    var displayDay = document.createElement("div");
    displayDay.setAttribute("class", "row");
    displayDay.innerHTML = `
<h1> Sorry, today is NOT Thursday! :( </h1>
    `;
    mainContent.append(displayDay);
  }
}

isItOrIsntIt();
