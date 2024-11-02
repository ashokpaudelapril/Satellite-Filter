
let button = document.querySelector("button");
const resultsTable = document.querySelector("#resultsTable");

let file, filterDay, filterDate;

class SatelliteData {
    constructor(satelliteName, date, day, startTime, endTime, duration, peakAZ, elevation) {
        this.satellite = satelliteName;
        this.date = date;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.peakAZ = peakAZ;
        this.elevation = elevation;
    }
}



function getData() {
    file = document.getElementById("fileInput").files[0];
    filterDay = document.querySelector("#filterDay").value;
    filterDate = document.querySelector("#filterDate").value;

    console.log(filterDate);
    if (filterDate != "") {
        filterDate = [filterDate.split("-")[1], filterDate.split("-")[2],
        filterDate.split("-")[0]].join("/");
    }




    if (!file) {
        alert("The file is empty or corrupted!!")
    }
    else if (filterDate === "" && filterDay === "") {
        alert("Please enter day or date!")
    }
}

function processFile() {
    getData();
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileContent = event.target.result;

            const lines = fileContent.split("\n");

            lines.forEach((line, index) => {
                if (index > 1) {
                    let data = line.split(" ");
                    addDataEntry(data);
                }
            })
        };
        reader.readAsText(file);
    }
}


function addDataEntry(data) {

    let array = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] != "") {
            array.push(data[i]);
        }
    }

    if (filterDate === "") {
        dayMatch(array);
    } else {
        dateMatch(array)
    }
}

function changeDate(date) {
    let dateSplit = date.split("/");
    dateSplit[1] = "0" + dateSplit[1];
    return dateSplit.join("/")
}

function dateMatch(array) {
    if (array[1] != undefined) {
        if (array[1].split("/")[1].length == 1) {
            array[1] = changeDate(array[1]);
        }
        if (array[1] == filterDate) {
            let match = new SatelliteData(array[0], array[1], getDayOfWeek(array[1]), array[2] + " " + array[3], array[4] + " " + array[5], array[6], array[7].slice(0, -1), array[8].slice(0, -2));
            addToTable(match);
        }
    }
}

function dayMatch(array) {
    console.log(filterDay);
    if (array[1] != undefined) {
        let week_of_day = getDayOfWeek(array[1]);
        if (week_of_day.trim().toUpperCase() == filterDay.trim().toUpperCase()) {
            let match = new SatelliteData(array[0], array[1], week_of_day, array[2] + " " + array[3], array[4] + " " + array[5], array[6], array[7].slice(0, -1), array[8].slice(0, -2));
            addToTable(match);
        }
    }
}

function addToTable(match) {
    resultsTable.style.display = "table";
    const row = document.createElement("tr");

    Object.keys(match).forEach(key => {
        const cell = document.createElement("td");
        cell.textContent = match[key];
        row.appendChild(cell);
    });
    resultsTable.appendChild(row);

    button.innerText = "Reset Satellite Passes";
    button.addEventListener("click", resetData)
};

function resetData() {
    file = null;
    filterDay = '';
    
    filterDate = '';

    document.querySelector("#fileInput").value = "";
    document.querySelector("#filterDay").value = "";
    
    document.querySelector("#filterDate").value = "";

    while (resultsTable.rows.length > 1) {
        resultsTable.deleteRow(1);
    }

    resultsTable.style.display = "none";
}


function getDayOfWeek(dateInput) {
    const date = new Date((dateInput.split("/")).join("-"));


    if (isNaN(date)) {
        return "Invalid date";
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

