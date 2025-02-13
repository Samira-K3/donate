function shareDonateAmount(id){
    const donateAmount = document.getElementById(id).value;
    const amount = parseFloat(donateAmount)
    return amount;
}

function innerTextShow(id){
    const currentAMount = document.getElementById(id).innerText;
    const currentBlance = parseFloat(currentAMount);
    return currentBlance
}

function showSectionId(id) {
    document.getElementById('donate-section').classList.add("hidden");
    document.getElementById('history-section').classList.add("hidden");
    // remove hidden 
    document.getElementById(id).classList.remove("hidden");

}
