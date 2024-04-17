var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Housework',
              'Paid Work',
              'Eating and Drinking',
              'Shopping',
              'TV and Radio',
              'Seeing Friends',
              'Education',
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [103, 315, 100, 20, 127, 23, 25],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(255, 165, 0)',
                'rgb(160, 32, 240)'
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
                text: 'People in China work roughly eight hours per day',
                font: {
                    size: 20
                },
              },
              subtitle: {
                display: true,
                text: 'If someone in China is not working, they\'re likely watching TV or listening to the radio',
                font: {
                    size: 16
                },
                padding: {
                    bottom: 10
                },
              },
            }
          }
        });