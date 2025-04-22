// Display the driver roster on the Quick Race screen
function displayDriverRoster() {
  var table = document.getElementById("driverTable");
  for (var i = 0; i < drivers.length; i++) {
      var row = table.insertRow(-1);
      var numberCell = row.insertCell(0);
      var nameCell = row.insertCell(1);
      var scheduleCell = row.insertCell(2);

      numberCell.innerHTML = drivers[i][0];
      nameCell.innerHTML = drivers[i][1];
      scheduleCell.innerHTML = drivers[i][2];
  }
}
window.onload = function () {
  displayDriverRoster();
}
