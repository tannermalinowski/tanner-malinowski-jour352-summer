var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              '0-5 feet',
              '6-11 feet',
              '12-17 feet',
              '18-23 feet',
              '24-29 feet',
              '30-36 feet',
              '36+ feet'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [170, 56, 115, 208, 172, 41, 22],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(248, 150, 30)',
                'rgb(87, 117, 144)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'NBA Buzzer-Beaters by Distance',
                font: {
                    size: 24
                }
              },
              subtitle: {
                display: true,
                text: 'Most buzzer-beaters are made from just inside the 3-point line',
                font: {
                    size: 18
                }
              }
            }
          }
        });