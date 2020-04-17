function draw(){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'დაინფიცირებული',
            data: confirmedA,
            type: 'line',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            fill: 'false'
        }, {
            label: 'გარდაცვლილი',
            data: deathsA,
            type: 'line',
            backgroundColor: 'grey',
            borderColor: 'grey',
            fill: 'false'
        },{
            label: 'გამოჯანმრთელებული',
            data: recoveredA,
            type: 'line',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 0.2)',
            fill: 'false'
        }
    ],
        labels: datesA
    },
});
};