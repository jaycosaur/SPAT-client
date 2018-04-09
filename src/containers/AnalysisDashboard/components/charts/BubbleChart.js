import React, { PureComponent } from 'react'
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
HighchartsMore(ReactHighcharts.Highcharts);

export default class BubbleChart extends PureComponent {
  render() {
    const config = {
        chart: {
            type: 'bubble',
            events: {
                click: e => this.props.actions({eventType: "deselect", type: "supplier"})
            }
        },
        boost: {
            useGPUTranslations: true
        },
    
        legend: {
            enabled: false
        },
    
        title: {
            text: 'CLUSTERS OF SUPPLIERS (RED ARE OUTLIERS)'
        },
        colors: [
            'rgb(159,193,69)'
        ],
        
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: '# INVOICES'
            },
            labels: {
                format: '{value}'
            },
        },
    
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'TOTAL INVOICE VALUE'
            },
            labels: {
                format: '$ {value}'
            },
        },
        plotOptions: {
            series: {
            }
        },
        series: [{
            animation:false,
            data: this.props.data.map(item => {
                const obj = {
                    x: item.numberInvoices,
                    y: item.totalInvoices,
                    z: 1,            
                }
                return obj
            }),
            point: {
                events: {
                    click: e => this.props.actions({eventType: "select", type: "supplier", value: e})
                }
            }
        }]
    }
    return (
        <ReactHighcharts config = {config} />
    )
  }
}
