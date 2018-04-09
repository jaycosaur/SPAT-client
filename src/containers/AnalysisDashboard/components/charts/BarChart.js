import React, { PureComponent } from 'react'
import ReactHighcharts from 'react-highcharts'

export default class BarChart extends PureComponent {
  render() {
    let chartData = this.props.data
    chartData = chartData.filter(item => item['Total Spend']>0)
    chartData = chartData.sort((a,b) => b['Total Spend']-a['Total Spend'])
    let categories = chartData.map(item => item.catlevel1)
    let series = chartData.map(item => parseFloat(item['Total Spend']))

    var formatter = new Intl.NumberFormat('en-US', {
    });

    const config = {
        chart: {
            type: 'column',
            events: {
                click: e => this.props.actions({eventType: "deselect", type: "category"})
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
            categories: categories
        },
        yAxis: [{
            title: {
                text: 'Spend (Millions)'
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
            data: series,
            point: {
                events: {
                    click: e => this.props.actions({eventType: "select", type: "category", value: e})
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
}
