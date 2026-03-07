const form = document.getElementById("my-form");
form.addEventListener('submit', function (event) {

const income = document.getElementById("annual-income");
const rent = document.getElementById("rent");
const utilities = document.getElementById("utilities");
const vacationTime = document.getElementById("vacation-time");
const vacationCost = document.getElementById("vacation-cost");
const streaming = document.getElementById("streaming");
const groceries = document.getElementById("groceries");
const bigPurchase = document.getElementById("big-purchase");
const personal = document.getElementById("personal");
// const geoArea = document.querySelector('input[name="class"]:checked');

const money = income - (rent+utilities+(4*groceries)+streaming+(4*personal))*12;
money.toFixed(2);
const netIncome = income - (rent+utilities);
netIncome.toFixed(2);

const needsSpending = rent + utilities + 4 * groceries;
needsSpending.toFixed(2);
const recNeedsSpending = income * 0.5;
recNeedsSpending.toFixed(2);

const wantSpending = streaming + (4*personal);
wantSpending.toFixed(2);
const recWantSpending = income * 0.3;
recWantSpending.toFixed(2);

const saving = income - (needsSpending + wantSpending);
saving.toFixed(2);
const recSaving = income * 0.2;
recSaving.toFixed(2);

const vacationSaving = vacationCost / vacationTime;




const food = 0
const personalPurchases = 0

});