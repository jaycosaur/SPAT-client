import React from 'react'
import ReactHighcharts from 'react-highcharts'

export default (props) => {
    var formatter = new Intl.NumberFormat('en-US', {
    });

    const config = {
        chart: {
            type: 'column',
            events: {
                click: e => props.actions.categoryDeselectAll()
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: false
                }
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
            text: 'SPEND OVER MEGACATEGORIES'
        },
        colors: [
            'rgb(159,193,69)'
        ],
        xAxis: {
            categories: props.data.categories
        },
        yAxis: [{
            title: {
                text: null
            }
        }],
        tooltip: {
            formatter: function () {
                return this.point.category +" : "+formatter.format(this.point.y);
            }
        },
        series: [{
            name: 'Spend per Category',
            animation:false,
            data: props.data.series,
            point: {
                events: {
                    click: e => props.actions.categorySelect({eventType: "select", type: "category", value: e})
                }
            },
            pointPadding: 0,
            groupPadding: 0.1
        }],
    };

    return (
        <ReactHighcharts config = {config} />
    )
  }
