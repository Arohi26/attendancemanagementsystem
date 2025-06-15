function addStudent() {
  var nameInput = document.getElementById("studentName");
  var name = nameInput.value;

  if (name === "") {
    alert("Please enter a student name.");
    return;
  }

  var table = document
    .getElementById("attendanceTable")
    .getElementsByTagName("tbody")[0];
  var row = table.insertRow();

  var nameCell = row.insertCell(0);
  var statusCell = row.insertCell(1);
  var presentCell = row.insertCell(2);
  var absentCell = row.insertCell(3);

  nameCell.innerHTML = name;
  statusCell.innerHTML = "Not Marked";

  var presentButton = document.createElement("button");
  presentButton.innerHTML = "Present";
  presentButton.onclick = function () {
    statusCell.innerHTML = "Present";
    statusCell.style.color = "green";
  };

  var absentButton = document.createElement("button");
  absentButton.innerHTML = "Absent";
  absentButton.onclick = function () {
    statusCell.innerHTML = "Absent";
    statusCell.style.color = "red";
  };

  presentCell.appendChild(presentButton);
  absentCell.appendChild(absentButton);

  nameInput.value = "";
}
