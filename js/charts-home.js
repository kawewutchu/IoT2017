/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#33b35a';


    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var LINECHART = $('#lineCahrt');
    var myLineChart = new Chart(LINECHART, {
        type: 'steppedLine',
        options: {
            legend: {
                display: false
            }
        },
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(77, 193, 75, 0.4)",
                    borderColor: brandPrimary,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: brandPrimary,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: brandPrimary,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 0,
                    data: [50, 20, 60, 31, 52, 22, 40],
                    spanGaps: false
                },
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 30, 81, 46, 55, 30],
                    spanGaps: false
                }
            ]
        }
    });

    // ------------------------------------------------------- //
    // Average Bar Chart
    // ------------------------------------------------------ //
    var BARCHART = $('#barChart')
    var myBarChart = new Chart(BARCHART, {
        type: 'bar',
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
                {
                    label: "จำนวนคนเข้าชม",
                    backgroundColor: [
                        'rgba(244, 67, 54,1.0)',
                        'rgba(156, 39, 176,1.0)',
                        'rgba(33, 150, 243,1.0)',
                        'rgba(0, 188, 212,1.0)',
                        'rgba(205, 220, 57,1.0)',
                        'rgba(255, 193, 7,1.0)',
                        'rgba(96, 125, 139,1.0)'
                    ],
                    borderColor: [
                        'rgba(244, 67, 54,1.0)',
                        'rgba(156, 39, 176,1.0)',
                        'rgba(33, 150, 243,1.0)',
                        'rgba(0, 188, 212,1.0)',
                        'rgba(205, 220, 57,1.0)',
                        'rgba(255, 193, 7,1.0)',
                        'rgba(96, 125, 139,1.0)'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40, 0],
                }
            ]
        }
    });

    // ------------------------------------------------------- //
    // Men Pie Chart
    // ------------------------------------------------------ //
    var MENPIECHART = $('#MenPieChart');
    var menPieChart = new Chart(MENPIECHART, {
        type: 'doughnut',
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
                {
                    data: [65, 59, 80, 81, 56, 55, 40, 0],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        'rgba(244, 67, 54,1.0)',
                        'rgba(156, 39, 176,1.0)',
                        'rgba(33, 150, 243,1.0)',
                        'rgba(0, 188, 212,1.0)',
                        'rgba(205, 220, 57,1.0)',
                        'rgba(255, 193, 7,1.0)',
                        'rgba(96, 125, 139,1.0)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(244, 67, 54,1.0)',
                        'rgba(156, 39, 176,1.0)',
                        'rgba(33, 150, 243,1.0)',
                        'rgba(0, 188, 212,1.0)',
                        'rgba(205, 220, 57,1.0)',
                        'rgba(255, 193, 7,1.0)',
                        'rgba(96, 125, 139,1.0)'
                    ]
                }]
        }
    });

    // ------------------------------------------------------- //
    // Women Pie Chart
    // ------------------------------------------------------ //
    var WOMENPIECHART = $('#WomenPieChart');
    var WomenPieChart = new Chart(WOMENPIECHART, {
        type: 'doughnut',
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
                {
                    data: [65, 59, 80, 81, 56, 55, 40, 0],
                    borderWidth: [1, 1, 1],
                    backgroundColor: [
                        'rgba(244, 67, 54,1.0)',
                        'rgba(156, 39, 176,1.0)',
                        'rgba(33, 150, 243,1.0)',
                        'rgba(0, 188, 212,1.0)',
                        'rgba(205, 220, 57,1.0)',
                        'rgba(255, 193, 7,1.0)',
                        'rgba(96, 125, 139,1.0)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(244, 67, 54,1.0)',
                        'rgba(156, 39, 176,1.0)',
                        'rgba(33, 150, 243,1.0)',
                        'rgba(0, 188, 212,1.0)',
                        'rgba(205, 220, 57,1.0)',
                        'rgba(255, 193, 7,1.0)',
                        'rgba(96, 125, 139,1.0)'
                    ]
                }]
        }
    });

   

});
