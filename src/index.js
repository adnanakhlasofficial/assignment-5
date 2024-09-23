// Utilities Function
function getInputNumById(id) {
    return Number(document.getElementById(id).value);
};

function getElementNumById(id) {
    return Number(document.getElementById(id).innerText);
};


// Main Functionalities 
let money = getElementNumById("money");
document.getElementById("noakhali-btn").addEventListener("click", ()=> {
    const inputValue = getInputNumById("noakhali-input");
    const donate = money - inputValue
    console.log(donate);
    
    document.getElementById("total-donate").innerText = inputValue;



    document.getElementById("money").innerText = donate;
    document.getElementById("noakhali-input").value = "";
    
});