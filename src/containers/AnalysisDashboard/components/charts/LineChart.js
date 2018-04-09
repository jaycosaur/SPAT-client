import React, { PureComponent } from 'react'
import ReactHighcharts from 'react-highcharts'

export default class LineChart extends PureComponent {
  render() {
    const config = {
        chart: {
            type: 'areaspline',
            events: {
                click: e => this.props.actions({eventType: "deselect", type: "date"})
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
            text: 'SPEND OVER TIME'
        },
        colors: [
            'rgb(159,193,69)'
        ],
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: [{
            title: {
                text: 'Spend (Millions)'
            }
        }],
        series: [{
            animation:false,
            name: 'Spend Over Time',
            data: [29.9, 71.5, 306.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
            point: {
                events: {
                    click: e => this.props.actions({eventType: "select", type: "date", value: e})
                }
            }
        }]
    };
    return (
        <ReactHighcharts config = {config} />
    )
  }
}
