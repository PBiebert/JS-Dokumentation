// Initial array with example data
let myData = ["Banana", "not Banana", "Apple"];

// ------------------------------
// Initialization function
// ------------------------------
function init() {
  // Load data from Local Storage (if available)
  getFromLocalStorage();
  // Display the data on the web page
  render();
}

// ------------------------------
// Function to save new data
// ------------------------------
function saveData() {
  // Get a reference to the input field
  let inputRef = document.getElementById("dataInput");

  // Check if the input field is not empty
  if (inputRef.value != "") {
    // Add the entered value to the array
    myData.push(inputRef.value);
  }

  // Save the updated array to Local Storage
  saveToLocalStorage();

  // Re-render the updated list on the page
  render();

  // Clear the input field
  inputRef.value = "";
}

// ------------------------------
// Function: Saves the array to Local Storage
// ------------------------------
function saveToLocalStorage() {
  // Local Storage can only store text,
  // so we convert the array into a string using JSON.stringify()
  localStorage.setItem("myData", JSON.stringify(myData));
}

// ------------------------------
// Function: Loads data from Local Storage
// ------------------------------
function getFromLocalStorage() {
  // Read the saved string and convert it back into an array using JSON.parse()
  let myArray = JSON.parse(localStorage.getItem("myData"));

  // If there is no saved data yet, initialize an empty array
  if (myArray == null) {
    myData = [];
  } else {
    myData = myArray;
  }
}

// ------------------------------
// Function: Displays data in the HTML
// ------------------------------
function render() {
  // Get a reference to the container element
  let contentRef = document.getElementById("content");

  // Clear previous content to avoid duplicates
  contentRef.innerHTML = "";

  // Loop through the array and create a paragraph for each item
  for (let i = 0; i < myData.length; i++) {
    contentRef.innerHTML += `<p>${myData[i]}</p>`;
  }
}
