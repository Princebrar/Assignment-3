/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday'); 
let wednesday = document.getElementById('wednesday'); 
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');
let cost_per_day = 35;
let calculate_cost = 0;
let number_of_days_selected = 0;
let full = document.getElementById('full');
let half = document.getElementById('half');
let clear_button = document.getElementById('clear-button');
const daysOfWeek = [monday, tuesday, wednesday, thursday, friday];
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    // monday.addEventListener("click",()=>{
    //     monday.classList.add('clicked');
    //     recalculate();
    // })
    // tuesday.addEventListener("click",()=>{
    //     tuesday.classList.add('clicked');
    //     recalculate();
    // })
    // wednesday.addEventListener("click",()=>{
    //     wednesday.classList.add('clicked');
    //     recalculate();
    // })
    // thursday.addEventListener("click",()=>{
    //     thursday.classList.add('clicked');
    //     recalculate();
    // })
    // friday.addEventListener("click",()=>{
    //     friday.classList.add('clicked');
    //     recalculate();
    // })
    // full.addEventListener("click",()=>{
    //     full.classList.add('clicked');
    //     recalculate();
    // })
    // half.addEventListener("click",()=>{
    //     half.classList.add('clicked');
    //     recalculate();
    // })
    daysOfWeek.forEach(day =>{
        day.addEventListener('click',() => {
            if (day.classList.contains('clicked')){
                day.classList.remove('clicked');
                number_of_days_selected --;
            }
            else{
                day.classList.add('clicked');
                if (day.classList.contains('clicked')){
                    number_of_days_selected ++;
                }
            }
            recalculate();
        });
    });
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
    clear_button.addEventListener("click",()=>{
        daysOfWeek.forEach(day => {
            day.classList.remove('clicked');
        });
        number_of_days_selected = 0;
        recalculate();
    });
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
    half.addEventListener('click',()=>{
        cost_per_day = 20;
        half.classList.add('clicked');
        full.classList.remove('clicked');
        recalculate();
    });
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
    full.addEventListener('click',() => {
        cost_per_day = 35;
        full.classList.add('clicked');
        half.classList.remove('clicked');
        recalculate();
    });
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    calculate_cost = number_of_days_selected * cost_per_day;
    document.getElementById('calculated-cost').innerHTML=calculate_cost;
}

