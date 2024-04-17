async function fetchTableData() {
  const starting_time = Date.now();
  try {
    const response = await fetch(`http://localhost:4040/api/report/general`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch  data");
    }
    const data = await response.json();
    // const end_time = Date.now();
    // const loading_time = end_time - starting_time;
    // console.log("loading time:", loading_time);
    // if (loading_time) {
    //   const preloaderParent = document.querySelector(".preloader-parent");
    //   preloaderParent.style.display = "none";
    // } else {
    //   const preloaderParent = document.querySelector(".preloader-parent");
    //   preloaderParent.style.display = "flex";
    // }
    return data;
  } catch (error) {
    console.error("Error fetching  data:", error);
    return [];
  }
}

let packageCounter = 1;

// function to generate the card HTML for each package
const generateCard = async (tableData) => {
  console.log(tableData);
  //  console.log(packageStatus);
  return `
  <tr>
  <td>
   ${tableData.player_email}
  </td>
  <td>
    ${tableData.player_phone}
  </td>
  <td>
      <div class="badge">${tableData.player_marchandize}</div>
  </td>
  <td class="text-end pe-0">${tableData.createdAt}</td>
  <td class="text-end pe-0">${tableData.updatedAt}</td>
</tr>
      `;
};

// function to display the cards

async function displayPackages() {
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = "";

  const tableDatashow = await fetchTableData();
  console.log(tableDatashow);
  if (tableDatashow.generalReport.length === 0) {
    const tableContainer = document.getElementById("table-container");
    // const message = `<p> You don't have an </p>`;
    // cardContainer.innerHTML = message;
  } else {
    tableDatashow.generalReport.forEach(async (packageType) => {
      const cardHTML = await generateCard(packageType);
      tableContainer.innerHTML += cardHTML;
    });
  }
}

const spinnerEl = document.querySelector(".spinner-grow");

// code for package status
displayPackages();
