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
                click: e => this.props.handleDeselect(e)
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
            data: this.props.data.filter(i => !i.isOutlier).map(item => {
                const obj = {
                    x: item.numberInvoices,
                    y: item.totalInvoices,
                    label: item.organisation,
                    z: 1,            
                }
                return obj
            }),
            point: {
                events: {
                    click: e => this.props.handleSelect(e)
                }
            },
            color: 'rgb(159,193,69)'
        },
        {
            animation:false,
            data: this.props.data.filter(i => i.isOutlier).map(item => {
                const obj = {
                    x: item.numberInvoices,
                    y: item.totalInvoices,
                    label: item.organisation,
                    z: 1,            
                }
                return obj
            }),
            point: {
                events: {
                    click: e => this.props.handleSelect(e)
                }
            }
            ,
            color: "red"
        }
    
    
    ]
    }
    return (
        <ReactHighcharts config = {config} />
    )
  }
}
