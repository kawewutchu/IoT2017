/*global $, document, Chart, LINECHART, data, options, window*/
var data = {
    A : 0,
    B : 0,
    C : 0,
    D : 0
};
var rank = [0, 0, 0, 0, 0]

var config = {
    apiKey: "AIzaSyAwSeCQL1IOPL-4k85q2NH4PzmBja1gSE8",
    authDomain: "iot2017-d5b6f.firebaseapp.com",
    databaseURL: "https://iot2017-d5b6f.firebaseio.com",
    projectId: "iot2017-d5b6f",
    storageBucket: "",
    messagingSenderId: "399751209911"
};
firebase.initializeApp(config);

var preObject = document.getElementById('paths');
var dbRef = firebase.database().ref().child('paths');

dbRef.on('child_added', snap => {
    var pathsData = snap.val().path
    readDate(pathsData)
    
    var index = 0;
    for(i in data) {
        rank[index] = data[i]
        index += 1   
    }
    console.log(rank)
    createChart()
});

function readDate(pathsData) {
    
    for(i in pathsData) {
        data[pathsData[i]] += 1
    }
    
    console.log(data)
}


function createChart(){

    // Main Template Color
    var brandPrimary = '#33b35a';
    // ------------------------------------------------------- //
    // Average Bar Chart
    // ------------------------------------------------------ //
    var HEATMAP = $('#heatMap')
    var myHEATMAP = new Chart(HEATMAP, {
        type: 'bubble',
        data: {
            datasets: [{
                label: ['CartA'],
                data: [{
                    x: 80,
                    y: 70,
                    r: 40
                }],
                backgroundColor: 'rgba(156, 39, 176,0.8)'
            },
            {
                label: ['CartB'],
                data: [{
                  x: 60,
                  y: 20,
                  r: 40
                }],
                backgroundColor: 'rgba(244, 67, 54,0.8)'
            },
            {
                label: ['CartC'],
                data: [{
                  x: 50,
                  y: 10,
                  r: 40
                }],
                backgroundColor: 'rgba(33, 150, 243,0.8)'
            }
        
        ]
        },
        options: {
                    responsive: true,
                    title:{
                        display:true,
                    },
                    tooltips: {
                            callbacks: {

                            }
                    },
                    scales: {
                        
                        yAxes : [{
                            display: false,
                            ticks : {
                                max : 100,    
                                min : 0
                            }
                        }],
                        xAxes : [{
                            display: false,
                            ticks : {
                                max : 100,    
                                min : 0
                            }
                        }]
                    }
                }
    });
    // ------------------------------------------------------- //
    // Average Bar Chart
    // ------------------------------------------------------ //
    var BARCHART = $('#barChart')
    var myBarChart = new Chart(BARCHART, {
        type: 'bar',
        data: {
            labels: ["A", "B", "C", "D"],
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
                    data: rank,
                }
            ]
        },
        options: {
            responsive: true,
            title:{
                display:true,
            },
            scales: {
                
                yAxes : [{
                    ticks : {
                        max : 15,    
                        min : 0
                    }
                }],
            }
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
}