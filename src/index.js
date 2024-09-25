// Noakhali Function
document.getElementById("noakhali-btn").addEventListener("click", () => {
    calculateDonation("noakhali-input", "money", "noakhali-donate", "noakhali-title");
});
// Noakhali Error Message
document.getElementById("noakhali-input").addEventListener("input", () => {
    errorAlert("noakhali-input", "noakhali-error", "noakhali-btn");
});

// Feni Function
document.getElementById("feni-btn").addEventListener("click", () => {
    calculateDonation("feni-input", "money", "feni-donate", "feni-title");

});
// Feni Error Message
document.getElementById("feni-input").addEventListener("input", () => {
    errorAlert("feni-input", "feni-error", "feni-btn", "money");
});


// Quota Function
document.getElementById("quota-btn").addEventListener("click", () => {
    calculateDonation("quota-input", "money", "quota-donate", "quota-title");

});
// Quota Error Message
document.getElementById("quota-input").addEventListener("input", () => {
    errorAlert("quota-input", "quota-error", "quota-btn", "money");
});

// History Tab Shift
document.getElementById("history-tab").addEventListener("click", () => {
    btnToggle("history-tab", "donation-tab", "history-container", "donation-container");
});

// Donation Tab Shift
document.getElementById("donation-tab").addEventListener("click", () => {
    btnToggle("donation-tab", "history-tab", "donation-container", "history-container");
});

// Navbar Scroll Effect Function
window.onscroll = function () { 
    scrollFunction(); 
};