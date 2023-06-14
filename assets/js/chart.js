var options = {
    series: [ {
        name: 'Net Profit',
        data: [ 44,55,57,56,61,58,63,60,66 ]
    },{
        name: 'Revenue',
        data: [ 76,85,101,98,87,105,91,114,94 ]
    },{
        name: 'Free Cash Flow',
        data: [ 35,41,36,26,45,48,52,53,41 ]
    } ],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: [ 'transparent' ]
    },
    xaxis: {
        categories: [ 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct' ],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart"),options);
chart.render();

var options = {
    series: [ {
        name: 'Cash Flow',
        data: [ 1.45,5.42,5.9,-0.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,0.34,3.88,13.07,
            5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-
            48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4
        ]
    } ],
    chart: {
        type: 'bar',
        height: 90
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [ {
                    from: -100,
                    to: -46,
                    color: '#10b981'
                },{
                    from: -45,
                    to: 0,
                    color: '#ff9800'
                } ]
            },
            columnWidth: '80%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        title: {
            text: 'Growth',
        },
        labels: {
            formatter: function (y) {
                return y.toFixed(0) + "%";
            }
        }
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2011-01-01','2011-02-01','2011-03-01','2011-04-01','2011-05-01','2011-06-01',
            '2011-07-01','2011-08-01','2011-09-01','2011-10-01','2011-11-01','2011-12-01',
            '2012-01-01','2012-02-01','2012-03-01','2012-04-01','2012-05-01','2012-06-01',
            '2012-07-01','2012-08-01','2012-09-01','2012-10-01','2012-11-01','2012-12-01',
            '2013-01-01','2013-02-01','2013-03-01','2013-04-01','2013-05-01','2013-06-01',
            '2013-07-01','2013-08-01','2013-09-01'
        ],
        labels: {
            rotate: -90
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart2"),options);
chart.render();

var options = {
    series: [ {
        name: 'Free Cash Flow',
        data: [ 35,41,36,26,45,48,52,53,41 ]
    } ],
    chart: {
        type: 'bar',
        height: 220
    },
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        show: true,
        width: 2,
        colors: [ 'transparent' ]
    },
    xaxis: {
        categories: [ 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct' ],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart3"),options);
chart.render();

var options = {
    series: [ {
        name: 'Free Cash Flow',
        data: [ 5,41,136,26,415,48,52,513,41 ]
    } ],
    chart: {
        type: 'bar',
        height: 220
    },
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        show: true,
        width: 2,
        colors: [ 'transparent' ]
    },
    xaxis: {
        categories: [ 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct' ],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart4"),options);
chart.render();


var options = {
    series: [
        {
            name: 'New York Temperature',
            data: [
                {
                    x: 'Jan',
                    y: [ -2,4 ]
                },
                {
                    x: 'Feb',
                    y: [ -1,6 ]
                },
                {
                    x: 'Mar',
                    y: [ 3,10 ]
                },
                {
                    x: 'Apr',
                    y: [ 8,16 ]
                }
            ]
        }
    ],
    chart: {
        height: 150,
        type: 'rangeArea'
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'New York Temperature (all year round)'
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    },
    dataLabels: {
        enabled: true
    },
    yaxis: {
        labels: {
            formatter: (val) => {
                return val + '°C'
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart5"),options);
chart.render();

var options = {
    series: [
        {
            name: 'New York Temperature',
            data: [
                {
                    x: 'Jan',
                    y: [ -2,4 ]
                },
                {
                    x: 'Feb',
                    y: [ -1,6 ]
                },
                {
                    x: 'Mar',
                    y: [ 3,10 ]
                },
                {
                    x: 'Apr',
                    y: [ 8,16 ]
                },
                {
                    x: 'May',
                    y: [ 8,16 ]
                },
                {
                    x: 'Jun',
                    y: [ 8,16 ]
                },
                {
                    x: 'Sept',
                    y: [ 8,16 ]
                },
            ]
        }
    ],
    chart: {
        height: 150,
        type: 'rangeArea'
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'New York Temperature (all year round)'
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    },
    dataLabels: {
        enabled: false
    },
    yaxis: {
        labels: {
            formatter: (val) => {
                return val + '°C'
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart6"),options);
chart.render();
