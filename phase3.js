document.addEventListener("DOMContentLoaded", function () {
    const bowlingSlots = [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
    ];
    const dartSlots = [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
    ];
  
    // Retrieve selected time and games from localStorage or server
    const phase1Data = JSON.parse(localStorage.getItem("phase1Data")) || {};
    const phase2Data = JSON.parse(localStorage.getItem("phase2Data")) || {};
    const selectedTime = phase1Data.time || "10:00 AM"; 
    const selectedGames = phase2Data.selectedGames || [];
  
    console.log(selectedGames); // Check if selected games are correctly stored
  
    // Function to create time slots
    function createTimeSlots(gameId, slots) {
      const container = document.getElementById(`${gameId}-time-slots`);
      
      // Check if the container exists
      if (!container) {
        console.error(`Container for ${gameId}-time-slots not found.`);
        return;
      }
  
      // Clear the container before appending new slots
      container.innerHTML = "";
  
      slots.forEach((slot) => {
        const div = document.createElement("div");
        div.className = "time-slot";
        div.textContent = slot;
        if (slot === selectedTime) {
          div.classList.add("selected");
        }
        div.addEventListener("click", () => {
          document
            .querySelectorAll(`#${gameId}-time-slots .time-slot`)
            .forEach((el) => el.classList.remove("selected"));
          div.classList.add("selected");
          // Save the selected time back to localStorage
          localStorage.setItem("time", slot);
        });
        container.appendChild(div);
      });
    }
  
    // Render time slots based on selected games
    if (selectedGames.includes("bowling")) {
      createTimeSlots("bowling", bowlingSlots);
    }
    if (selectedGames.includes("dart")) {
      createTimeSlots("dart", dartSlots);
    }
  });
  