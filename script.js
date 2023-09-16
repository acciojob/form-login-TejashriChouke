
    //Write your code here
	// script.js
function getFormValue(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the values of the First and Last Name input fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  // Check if both fields are filled
  if (firstName && lastName) {
    // Display the values using an alert
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
  } else {
    // Display an error message if any field is empty
    alert("Please fill in both First Name and Last Name fields.");
  }
}

// Add an event listener to the form for the submit event
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", getFormValue);


}
