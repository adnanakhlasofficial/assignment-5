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

// Context Menu Disabled
document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// Window scroll Effect for navbar
window.onscroll = () => { 
    scrollFunction(); 
};


// document.getElementById("cross").addEventListener("click", (e) => {
//     // document.getElementById("single-history").remove();
//     const target = e.target.parentElement;
//     console.log(target);
    
// });


document.getElementById("history").addEventListener("mouseover", (e) => {
    if (e.target.matches(".box")) {
        e.target.children[0].children[0].classList.add("hidden")
        e.target.children[0].children[1].classList.remove("hidden")
    } 
});



 document.getElementById("history").addEventListener("mouseleave", (e) => {
    console.log(e.target.children[0].children[0].children[0]);
    e.target.children[0].children[0].children[0].classList.remove("hidden")
    e.target.children[0].children[0].children[1].classList.add("hidden")
});










// for (const singleHistory of history) {

//     singleHistory.children[0].children[1].addEventListener("click", (e) => {
//         const target = e.target.parentElement.parentElement.remove();
//     });

//     singleHistory.addEventListener("mouseover", () => {
//         singleHistory.children[0].children[0].classList.add("hidden")
//         singleHistory.children[0].children[1].classList.remove("hidden")
//     });

//     singleHistory.addEventListener("mouseleave", () => {
//         singleHistory.children[0].children[0].classList.remove("hidden")
//         singleHistory.children[0].children[1].classList.add("hidden")
//     });
    
// };


/**
document.getElementById("single-history").addEventListener("mouseover", () => {
    document.getElementById("count").classList.add("hidden");
    document.getElementById("cross").classList.remove("hidden");
});

document.getElementById("single-history").addEventListener("mouseleave", () => {
    document.getElementById("count").classList.remove("hidden");
    document.getElementById("cross").classList.add("hidden");
});
 */