document.getElementById("confirm-booking").addEventListener("click", function () {
    // Retrieve phase1Data and phase2Data from localStorage
    const phase1Data = JSON.parse(localStorage.getItem("phase1Data"));
    const phase2Data = JSON.parse(localStorage.getItem("phase2Data"));

    // Check if phase1Data and phase2Data exist
    if (!phase1Data || !phase2Data || !phase2Data.selectedGames || !phase2Data.selectedOptions) {
        alert("No booking data found.");
        return;
    }

    let billHtml = "";

    // Add phase 1 data (e.g., selected date, time, and people)
    if (phase1Data.date) {
        billHtml += `<div class="bill-item"><strong>Date:</strong> ${phase1Data.date}</div>`;
    }
    if (phase1Data.adults) {
        billHtml += `<div class="bill-item"><strong>Adults:</strong> ${phase1Data.adults}</div>`;
    }
    if (phase1Data.children) {
        billHtml += `<div class="bill-item"><strong>Children:</strong> ${phase1Data.children}</div>`;
    }
    if (phase1Data.time) {
        billHtml += `<div class="bill-item"><strong>Time:</strong> ${phase1Data.time}</div>`;
    }

    // Add phase 2 data (e.g., selected games and options)
    phase2Data.selectedGames.forEach((game, index) => {
        const option = phase2Data.selectedOptions[index];
        billHtml += `<div class="bill-item"><strong>${game.charAt(0).toUpperCase() + game.slice(1)}:</strong> ${option} option</div>`;
    });

    // Example: Calculate total cost based on selected options (optional)
    let totalCost = 0;
    phase2Data.selectedGames.forEach((game, index) => {
        const option = phase2Data.selectedOptions[index];
        // Assuming a sample pricing model
        if (game === "bowling") {
            totalCost += parseInt(option) * 5; // Example: $5 per game
        } else if (game === "dart" || game === "pool") {
            totalCost += parseInt(option) * 10; // Example: $10 per 30 or 60 minutes
        }
    });

    // Show the bill container
    document.getElementById("bill-items").innerHTML = billHtml;
    document.getElementById("total-cost").textContent = `Total Cost: $${totalCost}`;

    // Display the bill container
    document.getElementById("bill-container").style.display = "block";
});
