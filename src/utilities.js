// Get Input Value Number
function getInputNumById(id) {
    return parseFloat(document.getElementById(id).value);
};
// Get Element Text Number
function getElementNumById(id) {
    return parseFloat(document.getElementById(id).innerText);
};

// Error Alert
function errorAlert(id, errorText, btn) {
    const value = getInputNumById(id);
    const money = getElementNumById("money")
    if (isNaN(value) || value <= 0 || value > money) {
        document.getElementById(errorText).classList.remove("hidden");
        document.getElementById(btn).setAttribute("disabled", true);
    } else {
        document.getElementById(errorText).classList.add("hidden");
        document.getElementById(btn).removeAttribute("disabled");
    }
};

// Button Toggle
function btnToggle(mainBtn, shiftBtn, hide, show) {
    document.getElementById(shiftBtn).classList.remove("btn-main");
    document.getElementById(shiftBtn).classList.add("btn-secondary");
    document.getElementById(mainBtn).classList.add("btn-main");
    document.getElementById(mainBtn).classList.remove("btn-secondary");
    document.getElementById(hide).classList.remove("hidden");
    document.getElementById(show).classList.add("hidden");
}

// Calculate Function
let count = 1;
function calculateDonation(id, money, donate, title) {
    let balance = getElementNumById(money);
    let donateBalance = getElementNumById(donate)
    
    const inputValue = getInputNumById(id);
    if (isNaN(inputValue)) {
        document.getElementById("my_modal_1").close();
        alert("Please enter a Valid Amount");
        return
    } else {
        balance -= inputValue;

        document.getElementById(donate).innerHTML = donateBalance + inputValue;
        document.getElementById(money).innerHTML = balance;

        document.getElementById(id).value = "";

        const createEl = document.createElement("div");
        createEl.className = "box space-y-4 relative";
        createEl.setAttribute("id", `transaction${count}`)
        createEl.innerHTML = `
        <p class="title text-center">${count}</p> 
        <h2 class="title">${inputValue} Taka is Donated for ${document.getElementById(title).innerHTML}</h2> 
        <p class="description">Date : ${new Date()}</p>
        `
        
        document.getElementById("history").prepend(createEl);
    }
    count++
};

// Navbar Scroll function
function scrollFunction() {
    if (document.documentElement.scrollTop > 0) {
        document.getElementById("header").classList.add("sticky", "top-0", "backdrop-blur-xl", "bg-white/30");
        document.getElementById("navbar").classList.remove("bg-backgrond")
    } else {
        document.getElementById("header").classList.remove("sticky", "top-0", "backdrop-blur-xl", "bg-white/30");
        document.getElementById("navbar").classList.add("bg-backgrond")
    }
}