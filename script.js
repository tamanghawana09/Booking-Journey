// Initialize Flatpickr for date selection
flatpickr("#date", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

// Handle Next Button
document.getElementById("phase-1-next").addEventListener("click", function () {
    const date = document.getElementById("date").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const time = document.getElementById("time").value;

    if (!date || !adults || !time) {
        alert("Please fill out all required fields.");
    } else {
        // Save the data and proceed to the next phase
        localStorage.setItem("phase1Data", JSON.stringify({ date, adults, children, time }));
        window.location.href = "phase2.html"; // Navigate to the next phase
    }
});
