var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Title'
              }
            }
          },

          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#E3342F",
                backgroundColor: "rgb(227,52,47,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#F6993F",
                backgroundColor: "rgb(246,153,63,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#3490DC",
                backgroundColor:"rgb(52,144,220,0.1)",
                borderWidth:2,

              }, { 
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#9B870C",
                backgroundColor: "rgb(155,135,12,0.1)",
                borderWidth:2,
            
              }, {
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#38C172",
                backgroundColor: "rgb(56,193,114,0.1)",
                borderWidth:2,
                
              }, {
                data: [
                  {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#9561E2",
                backgroundColor: "rgb(149,97,226,0.1)",
                borderWidth:2,
              
              }, {
                data: [
                    {x: 62.6, y: 3366},
                  ],
                label: "Pakistan",
                borderColor: "#000000",
                backgroundColor: "rgb(0,0,0,0.1)",
                borderWidth:2,
            
              }, {
                data: [
                    {x: 65.8, y: 1632},
                  ],
                label: "Bangladesh",
                borderColor: "#00E1E4",
                backgroundColor: "rgb(0,225,228,0.1)",
                borderWidth:2,

              }, { 
                data: [
                    {x: 81.1, y: 32193},
                  ],
                label: "Japan",
                borderColor: "#F66D9B",
                backgroundColor: "rgb(246,109,155,0.1)",
                borderWidth:2,
              },
            ],
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita',
                  padding: {
                    top: 25,
                    bottom: 25
                  }
                }
              },
              x: {
                  title: {
                    display: true,
                    text: 'Life Expectancy',
                    padding: {
                      top: 5,
                      bottom: 5
                    }
                  }
              }
            },
            plugins: {
              title: {
                display: true,
                fullSize: true,
                text: 'Japan and the United States have the world\'s highest life expectancies and GDPs',
                align: 'center',
                padding: {
                  top: 10,
                  bottom: 10
                },
                font: {
                  size: 20
                }
              },
              subtitle: {
                display: true,
                text: 'Japan is the world\'s only country with a life expectancy above 80. The United States\' GDP is more than triple than that of the next-closest country aside from Japan.',
                align: 'center',
                padding: {
                  bottom: 10
                },
              }
            }
          },
        });