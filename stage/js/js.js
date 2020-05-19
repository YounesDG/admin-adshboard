/*
function lineChart(id, label1, label2, label3, label4, label5) {
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: line,
        data: {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                label: label1,
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                borderColor: '#3e95cd',
                fill: false
            },
            {
                label: label2,
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                borderColor: '#8e5ea2',
                fill: false
            },
            {
                label: label3,
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                borderColor: '#3cba9f',
                fill: false
            },
            {
                label: label4,
                data: data,
                borderColor: '#e8c3b9',
                fill: false
            },
            {
                label: label5,
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                borderColor: '#c45850',
                fill: false
            },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }
    });
}
*/
function pieChart(id, data, labels, type) {
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            }]
        },
        legend: {
            display: true
        },
        options: {
            title: {
                responsive: false,
                display: true,
                text: "Colors election",
                
            }
        }
    });
}


//lineChart('third-chart', "Africa", "Asia", "Africa", "Europe", "Latin America", "North America");