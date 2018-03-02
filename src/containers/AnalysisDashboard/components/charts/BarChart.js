import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

export default class BarChart extends Component {
  render() {
    let chartData = this.props.data
    var formatter = new Intl.NumberFormat('en-US', {
    });

    const config = {
        chart: {
            type: 'column',
            events: {
                click: e => this.props.actions({eventType: "deselect", type: "category"})
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
            text: 'Spend over Mega Categories'
        },
        colors: [
            'rgb(159,193,69)'
        ],
        xAxis: {
            categories: chartData[0]
        },
        yAxis: [{
            title: {
                text: 'Spend (Millions)'
            }
        }],
        tooltip: {
            formatter: function () {
                return this.point.x +" : "+formatter.format(this.point.y);
            }
        },
        series: [{
            name: 'Spend per Category',
            animation:false,
            data: chartData[1],
            point: {
                events: {
                    click: e => this.props.actions({eventType: "select", type: "category", value: e})
                }
            }
        }],
    };

    return (
        <ReactHighcharts config = {config} />
    )
  }
}
