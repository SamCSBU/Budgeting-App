const data = JSON.parse(localStorage.getItem("formData"));
const needs = data.needs;
const wants = data.wants;
const savings = data.savings;
const groceries = data.changeGroceries;
const personal = data.changePersonal;
const save = data.changeSaving;
const recNeeds = data.recNeeds;
const recWants = data.recWants;
const recSavings = data.recSavings;
const savingVacation = data.savingVacation;
const monthlyIncome = data.monthlyIncome;
const rent = data.rent;
const utilities = data.utilities;
const streaming = data.streaming;
const monthlyGroceries = data.groceries;
const personalMonthly = data.personal;

document.getElementById("groceries-output").innerText = groceries;
document.getElementById("personal-output").innerText = personal;
document.getElementById("saving-output").innerText = save;
document.getElementById("vacation-output").innerText = savingVacation;


// chart values
document.getElementById("monthly-spending").innerText = '$' + monthlyIncome;
document.getElementById("monthly-rent").innerText = '$' + rent;
document.getElementById("monthly-utilities").innerText = '$' + utilities;
document.getElementById("monthly-streaming").innerText = '$' + streaming;
document.getElementById("monthly-groceries").innerText = '$' + monthlyGroceries;
document.getElementById("personal-spending").innerText = '$' + personalMonthly;

const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Needs', 'Wants', 'Savings'],
            datasets: [{
                label:'',
                data: [needs, wants, savings],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(157, 212, 249, 0.6)',
                    'rgba(27, 144, 66, 0.6)'
                ]
            }]
        },
        options: {
               plugins: {
                tooltip: {
            callbacks: {
                label: function(context) {
                    return '$' + context.parsed.y;
                }
            }
                        },
        legend: {
            display: false
        }
    },
            maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    
                    font: {
                        size: 20
                    },
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    callback: function(value) {
                    return '$' + value; },
                    font: {
                        size: 16
                    },
                    color: 'white'
                }
            }
        }
      
}
    });
    
    const ctx2 = document.getElementById('myChart-2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Needs', 'Wants', 'Savings'],
            datasets: [{
                label: '',
                data: [recNeeds, recWants, recSavings],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(157, 212, 249, 0.6)',
                    'rgba(1, 129, 44, 0.6)'
                ]
            }]
        },
        options: {
                     plugins: {
                        tooltip: {
            callbacks: {
                label: function(context) {
                    return '$' + context.parsed.y;
                }
            }
                        },
        legend: {
            display: false
        }
    },

            maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 20
                    },
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    callback: function(value) {
                    return '$' + value; },
                    font: {
                        size: 16
                    },
                    color: 'white'
                }
            }
        }
    }
    });