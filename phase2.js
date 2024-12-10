// Enable/disable options based on game selection
document.querySelectorAll('input[name="game"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        const options = document.getElementById(`${this.value}-options`);
        options.disabled = !this.checked;
    });
});

// Handle Next Button
document.getElementById("phase-2-next").addEventListener("click", function (event) {
    event.preventDefault();  

    const selectedGames = [];
    document.querySelectorAll('input[name="game"]:checked').forEach((checkbox) => {
        const game = checkbox.value;
        const option = document.getElementById(`${game}-options`).value;

        // Check the value of option before pushing to selectedGames
        console.log(`Game: ${game}, Option: ${option}`);

        // Only add the game and option if an option is selected
        if (option) {
            selectedGames.push({ game, option });
        } else {
            // Log if option is not selected
            console.warn(`No option selected for ${game}`);
        }
    });

    // If no games are selected, show an alert
    if (selectedGames.length === 0) {
        alert("Please select at least one game.");
    } else {
        // Store selected games and options in localStorage as phase2Data
        localStorage.setItem("phase2Data", JSON.stringify({
            selectedGames: selectedGames.map(item => item.game), // Store only game names
            selectedOptions: selectedGames.map(item => item.option) // Store corresponding options
        }));

        // Navigate to Phase 3
        window.location.href = "phase3.html";
    }
});
