var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1946-47', '1947-48', '1948-49', '1949-50', '1950-51', '1951-52', '1952-53', '1953-54', '1954-55', '1955-56', '1956-57', '1957-58', '1958-59', '1959-60', '1960-61', '1961-62', '1962-63', '1963-64', '1964-65', '1965-66', '1966-67', '1967-68', '1968-69', '1969-70', '1970-71', '1971-72', '1972-73', '1973-74', '1974-75', '1975-76', '1976-77', '1977-78', '1978-79', '1979-80', '1980-81', '1981-82', '1982-83', '1983-84', '1984-85', '1985-86', '1986-87', '1987-88', '1988-89', '1989-90',
        '1990-91', '1991-92', '1992-93', '1993-94', '1994-95', '1995-96', '1996-97', '1997-98', '1998-99',
        '1999-00', '2000-01', '2001-02', '2002-03', '2003-04', '2004-05', '2005-06', '2006-07', '2007-08',
        '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17',
        '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],

        datasets: [{
            label: 'Buzzer-Beaters',
            data: [2, 1, 2, 7, 6, 5, 7, 5, 6, 5, 4, 2, 3, 4, 3, 2, 3, 3, 6, 3, 6, 6, 5, 6, 3, 11, 6, 13, 8, 12, 11, 9, 9, 19, 9, 13, 16, 17, 13, 12, 11, 20, 13, 13, 14, 12, 10, 11, 11, 17, 14, 14, 7, 20, 11, 13, 17, 13, 18, 20, 18, 17, 22, 16, 16, 6, 15, 19, 22, 9, 19, 11, 18, 10, 11, 14, 17, 8],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.25},
        ]
    },
    options: {
        layout: {
            padding: {
                right: 40,
                top: 20,
                bottom: 20
            }
        },
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Buzzer-Beaters by year',
                font: {
                    size: 24
                }
            },
            subtitle: {
                display: true,
                text: 'It took 26 years for the NBA to see its first season with double-digit buzzer-beaters. Recently, seasons with at least 10 buzzer-beaters have been the norm.',
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
                    text: 'Season',
                    padding: {
                        top: 20
                    }
                },
                ticks: {
                    maxRotation: 0,
                    minRotation: 0
                },
            }, 


        },
    },
});