
let schoolName = "Bisoft School";
let isOpen = true;

if (isOpen) {
  console.log(`${schoolName} is open for registration!`);
} else {
  console.log(`${schoolName} is currently closed.`);
}

document.getElementById("registerBtn").addEventListener("click", function() {
  let name = document.getElementById("studentName").value;
  
  if (name) {
    document.getElementById("greeting").textContent = 
      `Welcome, ${name}! You are now registered at ${schoolName}.`;
  } else {
    document.getElementById("greeting").textContent = 
      "Please enter a valid name.";
  }
});

function calculateGrade(marks) {
  if (marks >= 80) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  else return "Fail";
}

// Function 2: Display grade result
function showGrade() {
  let marks = parseInt(document.getElementById("marks").value);
  let result = calculateGrade(marks);
  document.getElementById("gradeOutput").textContent = 
    `Your grade is: ${result}`;
}

document.getElementById("calcBtn").addEventListener("click", showGrade);

let students = ["Alice", "Brian", "Clara", "David", "Evelyn"];

document.getElementById("showStudentsBtn").addEventListener("click", function() {
  let list = document.getElementById("studentList");
  list.innerHTML = ""; // clear previous list

  // Loop through students
  for (let i = 0; i < students.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Student ${i+1}: ${students[i]}`;
    list.appendChild(li);
  }
});

// Countdown example (console only)
for (let i = 5; i >= 1; i--) {
  console.log("Countdown: " + i);
}

document.getElementById("toggleThemeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Update message dynamically
  let msg = document.getElementById("themeMessage");
  if (document.body.classList.contains("dark-mode")) {
    msg.textContent = "Dark Mode Enabled ";
  } else {
    msg.textContent = "Light Mode Enabled ";
  }
});

// Interaction 2: Add content dynamically
let footer = document.querySelector("footer");
let note = document.createElement("p");
note.textContent = "Made with using HTML, CSS, and JavaScript.";
footer.appendChild(note);

// Interaction 3: Respond to hover (CSS + JS combo)
document.getElementById("studentName").addEventListener("mouseover", function() {
  this.style.backgroundColor = "#e0f7fa";
});
document.getElementById("studentName").addEventListener("mouseout", function() {
  this.style.backgroundColor = "white";
});
