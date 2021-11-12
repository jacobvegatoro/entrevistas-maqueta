//Gráfico 1
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ASEPCO', 'SODIMAC', 'En blanco'],
        datasets: [{
            label: '# de entrevistas',
            data: [21, 483, 174],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Gráfico 2
var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['07-09', '08-09', '09-09', '10-09', '13-09', '14-09','15-09','16-09','20-09','21-09'],
        datasets: [{
            label: '# de entrevistas',
            data: [27, 22, 16, 19, 26, 24, 25, 26, 15, 32],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Gráfico 3

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['David', 'Emiliano', 'Jesús', 'Juan Carlos', 'Judith', 'Romina','En blanco'],
        datasets: [{
            label: '# de entrevistas',
            data: [27, 177, 5, 226, 43, 26, 174],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); 

//Gráfico 4

var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['No validado', 'Nombre no corresponde', 'RUT duplicado', 'RUT Erróneo', 'Validado', 'En blanco'],
        datasets: [{
            label: '# de entrevistas',
            data: [68, 5, 2, 14, 385, 204],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});