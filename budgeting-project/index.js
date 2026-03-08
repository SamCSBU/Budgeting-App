const form = document.getElementById("my-form");
form.addEventListener('submit',function (event)  {
    event.preventDefault();
   
 
const income = parseFloat(document.getElementById("annual-income").value);
const rent = parseFloat(document.getElementById("rent").value);   //fixed
const utilities = parseFloat(document.getElementById("utilities").value);     //fixed
const vacationTime = parseFloat(document.getElementById("vacation-time").value);
const vacationCost = parseFloat(document.getElementById("vacation-cost").value);
const streaming = parseFloat(document.getElementById("streaming").value);     //fixed
const groceries = parseFloat(document.getElementById("groceries").value);     //variable
const bigPurchase = parseFloat(document.getElementById("big-purchase").value);
const personal = parseFloat(document.getElementById("personal").value);       //variable
// const geoArea = document.querySelector('input[name="class"]:checked');


const money = income - (rent+utilities+(4*groceries)+streaming+(4*personal))*12;
money.toFixed(2);
const netIncome = (income / 12) - (rent+utilities);
netIncome.toFixed(2);

const needsSpending = (rent + utilities + (4 * groceries));
needsSpending.toFixed(2);
const recNeedsSpending = (income / 12) * 0.5;
recNeedsSpending.toFixed(2);

let changeGroceries = "";
if(needsSpending > recNeedsSpending){
    changeGroceries = "You are spending more than the recommeneded amount on needs. Try and cut back $" + ((needsSpending - recNeedsSpending) / 4).toFixed(2) + " on groceries per week.";
}
else if(needsSpending < recNeedsSpending){
    changeGroceries = "You are spending less than the recommended amount on needs. You have room to spend $" + ((recNeedsSpending - needsSpending) / 4).toFixed(2) + " more on groceries per week.";
}
else{
    changeGroceries = "You are spending the recommended amount on needs. Good job!";
}

const wantSpending = (streaming + (4*personal));
wantSpending.toFixed(2);
const recWantSpending = (income / 12) * 0.3;
recWantSpending.toFixed(2);

let changePersonal = "";
if(wantSpending > recWantSpending){
    changePersonal = "You are spending more than the recommended amount on wants. Try and cut back on $" + ((wantSpending - recWantSpending) / 4).toFixed(2) + " on personal spending per week.";
}
else if(wantSpending < recWantSpending){
    changePersonal = "You are spending less than the recommended amount on wants. You have room to spend $" + ((recWantSpending - wantSpending) / 4).toFixed(2) + " more on personal spending per week.";
}
else{
    changePersonal = "You are spending the recommended amount on wants. Good job!";
}

const saving = (income / 12) - (needsSpending + wantSpending);
saving.toFixed(2);
const recSaving = (income / 12) * 0.2;
recSaving.toFixed(2);

let changeSaving = "";
if(saving > recSaving){
    changeSaving = "You are saving more than the recommended amount. Try to use $" + ((saving - recSaving) / 4).toFixed(2) + " of your savings on your needs and/or wants per week.";
}
else if(saving < recSaving){
    changeSaving = "You are saving less than the recommended amount. Try to save $" + ((recSaving - saving) / 4).toFixed(2) + " more per week.";
}
else{
    changeSaving = "You are saving the recommended amount. Good job!";
}





// current monthly budget values: groceries * 4, rent, utilities, vacationSaving, streaming, bigPurchase, personal * 4
const vacationSaving = vacationCost / vacationTime;
// current annual budget values: groceries * 52, rent * 12, utilities *12, vacationCost, streaming*12, bigPurchase, personal *52

const grocerieChange = "hello";

const data = {
    needs: needsSpending,
    wants: wantSpending,
    savings: saving,
    changeGroceries: changeGroceries,
    changePersonal: changePersonal,
    changeSaving: changeSaving,
    recNeeds: recNeedsSpending,
    recWants: recWantSpending,
    recSavings: recSaving
}

localStorage.setItem("formData", JSON.stringify(data));
window.location.href = "analysis.html";
});


