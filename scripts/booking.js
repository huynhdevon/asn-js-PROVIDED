/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const cost_per_day = 20;
let number_of_days = 0;
const daySelector = document.querySelectorAll(".day-selector");
const clearButton = document.querySelector(".clear-button");
const halfButton = document.querySelector(".half");
const fullButton = document.querySelector(".full");
const totalDisplay = document.querySelector(".total");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daySelector.forEach(function(button) {
    button.addEventListener("click", function() {
        if (!button.classList.contains("clicked")) {
            button.classList.add("clicked");
            number_of_days++;
            recalculateTotal();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
    daySelector.forEach(function(button) {
        button.classList.remove("clicked");
    })
    number_of_days = 0;
    totalDisplay.innerHTML = "$0";
})

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", function() {
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    recalculateTotal();
})


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function() {
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    recalculateTotal();
})

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateTotal() {
    let daily_rate = halfButton.classList.contains("clicked") ? 20 : 35;
    let total_cost = daily_rate * number_of_days;
    totalDisplay.innerHTML = "$" + total_cost;
}

