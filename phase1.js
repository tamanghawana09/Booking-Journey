// Get references to the form elements
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const phase1NextButton = document.getElementById("phase-1-next");

// Add an event listener for the "Next" button
phase1NextButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission for handling logic

    // Get the selected date and time values
    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;

    // Check if both date and time are selected
    if (!selectedDate || !selectedTime) {
        alert("Please select both a date and a time before proceeding.");
        return;
    }

    // Save the selected date and time in localStorage
    const phase1Data = {
        date: selectedDate,
        time: selectedTime,
    };
    localStorage.setItem("phase1Data", JSON.stringify(phase1Data));

    // Move to the next phase (redirect to the next phase page)
    window.location.href = "./phase2.html";
});
