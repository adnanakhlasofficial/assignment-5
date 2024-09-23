// Utilities Function
// Get Input Value Number
function getInputNumById(id) {
    return parseFloat(document.getElementById(id).value);
};
// Get Element Text
function getElementNumById(id) {
    return parseFloat(document.getElementById(id).innerText);
};

// Error Alert
function errorAlert(id, errorText, btn) {
    const value = getInputNumById(id);
    if (isNaN(value) || value < 0 || value > money) {
        document.getElementById(errorText).classList.remove("hidden");
        document.getElementById(btn).setAttribute("disabled", true);
    } else {
        document.getElementById(errorText).classList.add("hidden");
        document.getElementById(btn).removeAttribute("disabled");
    }
};

// Button Toggle
function btnToggle(mainBtn, shiftBtn) {
    document.getElementById(shiftBtn).classList.remove("btn-main");
    document.getElementById(shiftBtn).classList.add("btn-secondary");
    document.getElementById(mainBtn).classList.add("btn-main");
    document.getElementById(mainBtn).classList.remove("btn-secondary");
}


// Main Functionalities 
let money = getElementNumById("money");
let totalDonate = getElementNumById("total-donate");

document.getElementById("noakhali-btn").addEventListener("click", () => {
    const inputValue = getInputNumById("noakhali-input");
    
    if (isNaN(inputValue)) {
        alert("Please Enter amount in input field");
        return
    } 
    money -= inputValue;

    totalDonate += inputValue;
    document.getElementById("total-donate").innerHTML = totalDonate;

    document.getElementById("money").innerText = money;
    document.getElementById("noakhali-input").value = "";

    const createEl = document.createElement("div");
    createEl.className = "box space-y-4";
    createEl.innerHTML = `
                <h2 class="title">${inputValue} Taka is Donated for ${document.getElementById("noakhali-title").innerHTML}</h2>
                <p class="description">Date : ${new Date().toLocaleString()}</p>
    `
    document.getElementById("history-container").append(createEl);

});





document.getElementById("noakhali-input").addEventListener("input", () => {
    errorAlert("noakhali-input", "noakhali-error", "noakhali-btn");
});

document.getElementById("history-tab").addEventListener("click", () => {
    btnToggle("history-tab", "donation-tab")
    document.getElementById("history-container").classList.remove("hidden");
    document.getElementById("donation-container").classList.add("hidden");
});
document.getElementById("donation-tab").addEventListener("click", () => {
    btnToggle("donation-tab", "history-tab")
    document.getElementById("donation-container").classList.remove("hidden");
    document.getElementById("history-container").classList.add("hidden");
});


