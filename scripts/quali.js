var interval;
var qualiResults = [];

function startQualifying() {
    qualiResults = [];
    document.getElementById("qualifyBtn").remove();
    var currentDriverIndex = 0;

    // Remove roster, write quali table
    var main = document.querySelector("main");
    main.innerHTML = "";
    var qualiContainer = document.createElement("div");
    qualiContainer.id = "qualifyingSection";
    var title = document.createElement("h2");
    title.textContent = "Qualifying Session";
    qualiContainer.appendChild(title);

    // Skip to end button
    var skipBtn = document.createElement("button");
    skipBtn.textContent = "Skip to End of Qualifying";
    skipBtn.id = "skipBtn";
    skipBtn.onclick = function() {
        document.getElementById("skipBtn").remove();
        drivers.forEach(function(driver) {
            if (!qualiResults.some(function(result) { return result.number === driver[0]; })) {
                var speed = QualifyingSpeed(driver);
                qualiResults.push({
                    number: driver[0],
                    name: driver[1],
                    speed: speed
                });
            }
        });
        clearInterval(interval);
        runQualifyingFinal();
    };
    qualiContainer.appendChild(skipBtn);
    main.appendChild(qualiContainer);
    runQualifying(currentDriverIndex);

    // Quali table
    var qualiResultsContainer = document.createElement("div");
    qualiResultsContainer.id = "qualiResultsContainer";
    qualiContainer.appendChild(qualiResultsContainer);
}

// Qualifying speed calculator
function QualifyingSpeed(driver) {
    var equipment = ratingToValue(driver[3]);
    var driverSkill = ratingToValue(driver[4]);
    var experience = ratingToValue(driver[5]);
    var momentum = ratingToValue(driver[6]);
    var rand = Math.random();
    var qualiSpeed = (equipment * 2) + (rand * driverSkill * 1.5) + (experience * 0.125) + (momentum * 0.25);
    return qualiSpeed;
}

// Run the qualifying process one step at a time
function runQualifying(driverIndex) {
    var fieldCapacity = 20;
    interval = setInterval(function() {
        if (driverIndex < drivers.length) {
            var driver = drivers[driverIndex];
            if (!qualiResults.some(function(result) { return result.number === driver[0]; })) {
                var speed = QualifyingSpeed(driver);
                qualiResults.push({
                    number: driver[0],
                    name: driver[1],
                    speed: speed
                });
                updateQualifyingTable(qualiResults);
            }
            driverIndex++;
        } else {
            clearInterval(interval);
            runQualifyingFinal();
        }
    }, 500); //time for each driver to quali
}

// Update quali table dynamically
function updateQualifyingTable(qualiResults) {
    var fieldCapacity = 20;
    var container = document.getElementById("qualiResultsContainer");
    container.innerHTML = "";
    var table = document.createElement("table");

    // Create the table header
    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    headerRow.innerHTML = "<th>Grid</th><th>Number</th><th>Name</th><th>Qualifying Speed</th>";
    var body = table.createTBody();

    // Sort and populate table
    qualiResults.sort(function(a, b) {
        return b.speed - a.speed;
    });

    for (var j = 0; j < qualiResults.length; j++) {
        var grid = j + 1;
        var gridPosition = grid > fieldCapacity ? "DNQ" : grid;

        var row = body.insertRow();
        row.insertCell(0).textContent = gridPosition;
        row.insertCell(1).textContent = qualiResults[j].number;
        row.insertCell(2).textContent = qualiResults[j].name;
        row.insertCell(3).textContent = qualiResults[j].speed.toFixed(3);
    }
    container.appendChild(table);
}

// Run final qualifying results display
function runQualifyingFinal() {
    var fieldCapacity = 20;
    var sortedResults = qualiResults.sort(function(a, b) {
        return b.speed - a.speed;
    });

    // Store the starting order incl DNQ
    window.qualifyingOrder = sortedResults
    updateQualifyingTable(sortedResults);
    var qualiContainer = document.getElementById("qualifyingSection");
    // Race button
    var raceBtn = document.createElement("button");
    raceBtn.textContent = "Start Race";
    raceBtn.id = "raceBtn";
    raceBtn.onclick = startRace;
    qualiContainer.appendChild(raceBtn);
    var oldBtn = document.getElementById("skipBtn");
    if (oldBtn) oldBtn.remove();
}

function startRace(){
    console.log("Placeholder")
}
