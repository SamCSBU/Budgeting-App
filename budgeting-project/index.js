const form = document.getElementById("my-form");
form.addEventListener('submit',function (event)  {
    event.preventDefault();
   
 
const income = parseFloat(document.getElementById("annual-income").value);
let rent = parseFloat(document.getElementById("rent").value);   //fixed
let utilities = parseFloat(document.getElementById("utilities").value);     //fixed
const vacationTime = parseFloat(document.getElementById("vacation-time").value);
const vacationCost = parseFloat(document.getElementById("vacation-cost").value);
let streaming = parseFloat(document.getElementById("streaming").value);     //fixed
const groceries = parseFloat(document.getElementById("groceries").value);     //variable
// const bigPurchase = parseFloat(document.getElementById("big-purchase").value);
const personal = parseFloat(document.getElementById("personal").value);       //variable

let monthlyIncome = 0;
if(!isNaN(income)){
    monthlyIncome = income/12;
}
monthlyIncome = parseFloat(monthlyIncome.toFixed(2));

let monthlyGroceries = 0;
if(!isNaN(groceries)){
    monthlyGroceries = groceries * 4;
}

let personalMonthly = personal*4;
if(isNaN(personal)){
    personalMonthly = 0;
}

if(isNaN(utilities)){
    utilities = 0;
}

if(isNaN(rent)){
    rent = 0;
}

if(isNaN(streaming)){
    streaming = 0;
}

const money = income - (rent+utilities+(4*groceries)+streaming+(4*personal))*12;
money.toFixed(2);
const netIncome = (income / 12) - (rent+utilities);
netIncome.toFixed(2);

let needsSpending = (rent + utilities + (4 * groceries));
needsSpending = parseFloat(needsSpending.toFixed(2));
let recNeedsSpending = (income / 12) * 0.5;
recNeedsSpending = parseFloat(recNeedsSpending.toFixed(2));

let changeGroceries = "";
if(needsSpending > recNeedsSpending+0.02*recNeedsSpending){
    changeGroceries = "You are spending more than the recommeneded amount on needs. Consider finding cheaper rent or utilities or cut back $" + ((needsSpending - recNeedsSpending) / 4).toFixed(2) + " on groceries per week.";
}
else if(needsSpending < recNeedsSpending-0.02*recNeedsSpending){
    changeGroceries = "You are spending less than the recommended amount on needs. You have room to spend $" + ((recNeedsSpending - needsSpending) / 4).toFixed(2) + " more on groceries per week.";
}
else{
    changeGroceries = "You are spending the recommended amount on needs. Good job!";
}

let wantSpending = (streaming + (4*personal));
wantSpending = parseFloat(wantSpending.toFixed(2));
let recWantSpending = (income / 12) * 0.3;
recWantSpending = parseFloat(recWantSpending.toFixed(2));

let changePersonal = "";
if(wantSpending > recWantSpending+0.02*recWantSpending){
    changePersonal = "You are spending more than the recommended amount on wants. Try and cut back on $" + ((wantSpending - recWantSpending) / 4).toFixed(2) + " on personal spending per week.";
}
else if(wantSpending < recWantSpending-0.02*recWantSpending){
    changePersonal = "You are spending less than the recommended amount on wants. You have room to spend $" + ((recWantSpending - wantSpending) / 4).toFixed(2) + " more on personal spending per week.";
}
else{
    changePersonal = "You are spending the recommended amount on wants. Good job!";
}

let saving = (income / 12) - (needsSpending + wantSpending);
saving = parseFloat(saving.toFixed(2));
let recSaving = (income / 12) * 0.2;
recSaving = parseFloat(recSaving.toFixed(2));


let changeSaving = "";
if(saving > recSaving+0.02*recSaving){
    changeSaving = "You are saving more than the recommended amount. Feel free to use $" + ((saving - recSaving) / 4).toFixed(2) + " of your savings on your needs and/or wants per week.";
}
else if(saving < recSaving-0.02*recSaving){
    changeSaving = "You are saving less than the recommended amount. Try to save $" + ((recSaving - saving) / 4).toFixed(2) + " more per week.";
}
else{
    changeSaving = "You are saving the recommended amount. Good job!";
}





// current monthly budget values: groceries * 4, rent, utilities, vacationSaving, streaming, bigPurchase, personal * 4
let saveVacation = "";
if(isNaN(vacationCost) && isNaN(vacationTime)){
    saveVacation = "You are not currently saving for a vacation.";
}
else if(isNaN(vacationCost)){
    saveVacation = "Cannot calculate recommended saving without a cost.";
}
else if(isNaN(vacationTime)){
    saveVacation = "Cannot calculate recommended saving without a timeframe.";
}
else{
    let vacationSaving = vacationCost / (vacationTime * 4);
    vacationSaving = parseFloat(vacationSaving.toFixed(2));
    saveVacation = "If possible, try and save $" + vacationSaving + " per week for your upcoming vacation.";
}


// current annual budget values: groceries * 52, rent * 12, utilities *12, vacationCost, streaming*12, bigPurchase, personal *52


const data = {
    needs: needsSpending,
    wants: wantSpending,
    savings: saving,
    changeGroceries: changeGroceries,
    changePersonal: changePersonal,
    changeSaving: changeSaving,
    recNeeds: recNeedsSpending,
    recWants: recWantSpending,
    recSavings: recSaving,
    savingVacation: saveVacation,
    monthlyIncome: monthlyIncome,
    rent: rent,
    utilities: utilities,
    streaming: streaming,
    groceries: monthlyGroceries,
    personal: personalMonthly,
}

localStorage.setItem("formData", JSON.stringify(data));
window.location.href = "analysis.html";
});


