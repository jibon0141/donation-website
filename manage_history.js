// Display all donation history


document.addEventListener("DOMContentLoaded", function() {
    // Retrieve donation history from localStorage for Noakhali
    const noakhaliDonations = JSON.parse(localStorage.getItem('donationHistory')) || [];
    const feniDonations = JSON.parse(localStorage.getItem('donationHistoryFeni')) || [];
    const qtaDonations = JSON.parse(localStorage.getItem('donationHistoryQta')) || [];

    // Get the element where you want to display the donation history
    const displayHistoryElement = document.getElementById("display-history");

    // Check if the element exists
    if (!displayHistoryElement) {
        console.error("The display-history element is not found in the DOM.");
        return;
    }
    
    // Loop through each Noakhali donation and create an element to display it
    noakhaliDonations.forEach(donation => {
        const p = document.createElement("p");
        p.innerHTML = `${donation.amount} Taka Donated for Flood at Noakhali, Bangladesh.<br>
                       তারিখ ও সময়: ${donation.dateTime}`;
        displayHistoryElement.appendChild(p);
    });

    // Loop through each Feni donation and create an element to display it
    feniDonations.forEach(donation => {
        const p = document.createElement("p");
        p.innerHTML = `${donation.amount} Taka Donated for Flood Relief in Feni, Bangladesh.<br>
                       তারিখ ও সময়: ${donation.dateTime}`;
        displayHistoryElement.appendChild(p);
    });

    // Loop through each Quota donation and create an element to display it
    qtaDonations.forEach(donation => {
        const p = document.createElement("p");
        p.innerHTML = `${donation.amount} Taka Donated for Aid for Injured in the Quota Movement.<br>
                       তারিখ ও সময়: ${donation.dateTime}`;
        displayHistoryElement.appendChild(p);
    });
});
