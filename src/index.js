// Utilities Function
function getInputNumById(id) {
    return Number(document.getElementById(id).value);
};

function getElementNumById(id) {
    return Number(document.getElementById(id).innerText);
};


// Main Functionalities 
let money = getElementNumById("money");
let totalDonate = getElementNumById("total-donate");
document.getElementById("noakhali-btn").addEventListener("click", ()=> {
    const inputValue = getInputNumById("noakhali-input");
    money -= inputValue;
    
    totalDonate += inputValue;
    document.getElementById("total-donate").innerHTML = totalDonate;

    document.getElementById("money").innerText = money;
    document.getElementById("noakhali-input").value = "";
    
});

document.getElementById("noakhali-input").addEventListener("input", () => {
    const value =  getInputNumById("noakhali-input");
    if (isNaN(value) ||  value < 0 || value > money) {
        const errorMsg = document.getElementById("noakhali-error");
        errorMsg.classList.remove("hidden");
        const button = document.getElementById("noakhali-btn");
        button.setAttribute("disabled", true);
    } else {
        const errorMsg = document.getElementById("noakhali-error");
        errorMsg.classList.add("hidden");
        const button = document.getElementById("noakhali-btn");
        button.removeAttribute("disabled");
    }
    
})