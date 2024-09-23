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