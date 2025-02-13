function showButtonColor(buttonId) {
    // Sob button theke active class remove kore dibo
    document.getElementById("show-donate-btn").classList.remove("bg-[#b4f461]", "bg-gray-300");
    document.getElementById("show-history-btn").classList.remove("bg-[#b4f461]", "bg-gray-300");

    // Sob button ke default gray kore dibo
    document.getElementById("show-donate-btn").classList.add("bg-gray-300");
    document.getElementById("show-history-btn").classList.add("bg-gray-300");

    // Click kora button ke green kore dibo
    document.getElementById(buttonId).classList.add("bg-[#b4f461]");
}

// By default Donation button active
document.getElementById("show-donate-btn").classList.add("bg-[#b4f461]");

document.getElementById("show-donate-btn").addEventListener("click", function () {
    showSectionId("donate-section");
    showButtonColor("show-donate-btn");
});

document.getElementById("show-history-btn").addEventListener("click", function () {
    showSectionId("history-section");
    showButtonColor("show-history-btn");
});
