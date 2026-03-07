import {testValue} from './index.js'

const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Needs', 'Wants', 'Savings'],
            datasets: [{
                label: 'Test Chart',
                data: [testValue, 19, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        }
    });