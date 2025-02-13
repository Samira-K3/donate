// Reusable Function for Donation Process
function handleDonation(buttonId, inputId, balanceId, titleId) {
    document.getElementById(buttonId).addEventListener("click", function (e) {
        e.preventDefault();

        const donateAmount = shareDonateAmount(inputId);
        const amount = parseFloat(donateAmount);
        const currentBalance = innerTextShow(balanceId);

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        // Update balance
        const updatedAmount = amount + currentBalance;
        document.getElementById(balanceId).innerText = updatedAmount;

        // Show modal with updated amount
        document.getElementById("modalText").innerText = `New Total Amount: ${updatedAmount} Taka`;
        document.getElementById("donationModal").showModal();

        // Close modal button
        document.getElementById("closeModalBtn").addEventListener("click", function () {
            document.getElementById("donationModal").close();
        });

        // Update cash-out balance
        const cashOut = innerTextShow("donate-cash-out");
        const newBalance = cashOut - amount;
        document.getElementById("donate-cash-out").innerText = newBalance;

        // Time
        const currentTime = new Date().toLocaleString();

        // Update History 
        const title = document.getElementById(titleId).innerText;
        const historyContainer = document.getElementById("all-history");

        const p = document.createElement("p");
        p.innerText = `${amount} Taka is Donated for ${title} at ${currentTime}`;
        p.classList.add("py-1", "text-gray-700", "border-b"); 

        historyContainer.classList.add("border-2", "p-2");
        historyContainer.appendChild(p); 
    });
}


handleDonation("donation-add-btn", "donateAmount", "current-amount", "noakhali-title");
handleDonation("donation-add-money-btn", "add-donate-amount", "current-donate-amount", "feni-title");
handleDonation("add-money-donate-btn", "add-donated-amount", "your-current-balance", "movement-title");
