import React from 'react'
import ReactHighcharts from 'react-highcharts'

export default (props) => {
    const config = {
        chart: {
            type: 'area',
            zoomType: 'x',
            events: {
                click: e => props.handleDeselect(e),
                selection: e => props.handleSelect([e.xAxis[0].min,e.xAxis[0].max])
            }
        },
        exporting: {
            chartOptions: { // specific options for the exported image
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                }
            },
            fallbackToExportServer: false
        },
        title: {
            text: 'Spend Over Time'
        },
        colors: [
            'rgb(159,193,69)'
        ],
        xAxis: {
            type: 'datetime'
        },
        yAxis: [{
            title: {
                text: 'Spend ($AUD)'
            }
        }],
        series: [{
            name: 'Daily Spend',
            data: props.data,
            point: {
                events: {
                    click: e => props.handleSelect([e.point.category])
                }
            }
        }]
    };
    return (
        <ReactHighcharts config = {config} />
    )
  }

  /*

        chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]



  */