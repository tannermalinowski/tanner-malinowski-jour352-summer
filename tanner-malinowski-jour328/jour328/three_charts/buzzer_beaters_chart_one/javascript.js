var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Boston Celtics', 'New York Knicks', 'Chicago Bulls', 'Los Angeles Lakers', 'Milwaukee Bucks', 'Atlanta Hawks', 'Cleveland Cavaliers', 'Portland Trail Blazers', 'Dallas Mavericks', 'Philadelphia 76ers'],
        datasets: [{
            label: 'Buzzer-Beaters',
            data: [49, 42, 39, 38, 34, 31, 31, 31, 29, 27],
            backgroundColor: [
                '#ff0800'
            ]
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Which NBA Teams Have the Most Buzzer-Beaters?',
                font: {
                    size: 24
                }
            },
            subtitle: {
                display: true,
                text: 'Boston has seven more buzzer-beaters than the next-closest team',
                font: {
                    size: 18
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Buzzer-Beaters',
                    padding: 20,
                }
            },

            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Team',
                    padding: 20,
                },
                ticks: {
                    maxRoation: 90,
                    minRoation: 90
                }
            }, 
        },
    },
});