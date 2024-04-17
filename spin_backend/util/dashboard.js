const playerNumberEl = document.getElementById("player_numbers");
const marchandizeEl = document.getElementById("marchandize_number");
// players
async function fetchPlayers() {
  try {
    const response = await fetch(
      `http://localhost:4040/api/report/general/players`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch package data");
    }
    const data = await response.json();
    playerNumberEl.textContent = data.generalReport.length;
  } catch (error) {
    console.error("Error fetching package data:", error);
  }
}

fetchPlayers();

// ,marchandize
async function fetchMarchandize() {
  try {
    const response = await fetch(`http://localhost:4040/api/report/gifts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch package data");
    }
    const data = await response.json();
    marchandizeEl.textContent = data.giftReport.length;
  } catch (error) {
    console.error("Error fetching package data:", error);
  }
}

fetchMarchandize();
