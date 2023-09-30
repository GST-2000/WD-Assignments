// //Title constructor function that creates a Title object
// function Title(t1) 
// { this.mytitle = t1;
// }

// Title.prototype.getName = function () 
// { 
// return (this.mytitle);
// }

// var socialMedia = {
//   facebook : 'http://facebook.com',
//   twitter: 'http://twitter.com',
//   flickr: 'http://flickr.com',
//   youtube: 'http://youtube.com'
// };

// var t = new Title("CONNECT WITH ME!");

var tableRows = document.getElementsByTagName("tr");

const thElement1 = document.createElement("th");
thElement1.innerHTML = "EDIT";
const thElement2 = document.createElement("th");
thElement2.innerHTML = "DELETE";

function changeBgColor(checkbox) {
  var selectedRow = checkbox.parentNode.parentNode;
  var bgColor = selectedRow.style.backgroundColor;

  const tdDeleteButton = document.createElement("td");
  tdDeleteButton.innerHTML = '<button onClick="deleteRowDetails(this)">Delete</button>';

  const tdEditButton = document.createElement("td");
  tdEditButton.innerHTML = '<button onClick="editRowDetails()">Edit</button>';

  if (checkbox.checked) {
    selectedRow.style.backgroundColor = "yellow";
    this.addHeadings();
    selectedRow.appendChild(tdEditButton);
    selectedRow.appendChild(tdDeleteButton);
  } else {
    selectedRow.style.backgroundColor = "";
    var employeeTable = document.getElementById('myTable');
    employeeTable.rows[selectedRow.rowIndex].deleteCell(8);
    employeeTable.rows[selectedRow.rowIndex].deleteCell(8);
  }

  enableSubmit();
}

function addHeadings() {
  tableRows[0].appendChild(thElement1);
  tableRows[0].appendChild(thElement2);
}
function removeHeadings() {
  tableRows[0].removeChild(thElement1);
  tableRows[0].removeChild(thElement2);
}
function toggleDropDown(element) {
  var dropDownRow = element.parentNode.parentNode.nextElementSibling;
  dropDownRow.style.display = (dropDownRow.style.display === "none" || dropDownRow.style.display === "") ? "table-row" : "none";
}

function addStudentRow() {

  var count = (document.getElementById("myTable").rows.length - 1) / 2;
  count = count + 1;
  let table = document.getElementById("myTable"); 
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkBoxClass");
  checkbox.setAttribute("onclick", "changeBgColor(this)");
  cell1.appendChild(checkbox);
  let dynamicText = 'openDropDown(this)';
  let downArrow = document.createElement("img");
  downArrow.setAttribute("src", "down.png");
  downArrow.setAttribute("width", "25px");
  downArrow.setAttribute("onclick",dynamicText);
  cell1.appendChild(downArrow);
  let breakLine = document.createElement("br");
  cell1.insertBefore(breakLine, downArrow);
  row.appendChild(cell1);
  studentCell = document.createElement("td");
  studentCell.innerHTML = "Student " + count;
  row.appendChild(studentCell);
  advisorCell = document.createElement("td");
  advisorCell.innerHTML = "Teacher " + count;
  row.appendChild(advisorCell);
  awardCell = document.createElement("td");
  awardCell.innerHTML = "Approved";
  row.appendChild(awardCell);
  semesterCell = document.createElement("td");
  semesterCell.innerHTML = "Fall";
  row.appendChild(semesterCell);
  typeCell = document.createElement("td");
  typeCell.innerHTML = "TA";
  row.appendChild(typeCell);
  minBudget = 00001;
  maxBudget = 99999;
  const randomBudget = Math.floor(Math.random() * (maxBudget - minBudget + 1)) + minBudget;
  budgetCell = document.createElement("td");
  budgetCell.innerHTML = randomBudget;
  row.appendChild(budgetCell);
  pecentMin = 0;
  percentMax = 100;
  const randomPercentage = Math.floor(Math.random() * (percentMax - pecentMin + 1)) + pecentMin;
  let percentCell = document.createElement("td");
  percentCell.innerHTML = randomPercentage + "%";
  row.appendChild(percentCell);
  table.appendChild(row);

  let row2 = document.createElement("tr");
  row2.setAttribute('class', 'dropDownTextArea');
  row2.style.display = 'none';  // Initially hide the drop-down row
  let cellText = document.createElement('td');
  cellText.setAttribute("colspan", 8);
  cellText.innerHTML = `
    Advisor: <br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: ${randomBudget}<br />
    Tuition Number: ${randomBudget + 100}<br />
    Comments: Sample comments for Student ${count}<br /><br /><br />
    Award Status: Approved<br /><br /><br />
  `;
  row2.appendChild(cellText);
  table.appendChild(row2);

  alert('Record Added Sucessfully!');
}
function openDropDown(rowDetails) {
  var row = (rowDetails.parentNode.parentNode.rowIndex + 1) / 2 - 1;
  var x = document.getElementsByClassName("dropDownTextArea");
  
  var displayStyle = x[row].style.display;
  x[row].style.display = (displayStyle === 'none' || displayStyle === '') ? 'table-row' : 'none';
}



function editRowDetails(){
  prompt("Edit the details:", "");
}

function deleteRowDetails(row){
  var employeeTable = document.getElementById('myTable');
  var rowNum = row.parentNode.parentNode.rowIndex;
  console.log(rowNum);
  employeeTable.deleteRow(rowNum+1);
  employeeTable.deleteRow(rowNum);
  alert('Record Deleted Successfully!');
}
function enableSubmit(){
  var enableButton = false;
  var checkList = document.getElementsByClassName('checkBoxClass');
  for(let i=0;i<checkList.length;i++){
    if(checkList[i].checked){
      enableButton = true;
      break;
    }
  }
  if(enableButton) {
    document.getElementById('submitButton').disabled = false;
    document.getElementById('submitButton').style.background = 'orange';
    document.getElementById('submitButton').style.color = 'white';
}
  else {
    this.removeHeadings();
    document.getElementById('submitButton').disabled = true;
    document.getElementById('submitButton').style.background = '';
    document.getElementById('submitButton').style.color = 'gray';
  }
}
