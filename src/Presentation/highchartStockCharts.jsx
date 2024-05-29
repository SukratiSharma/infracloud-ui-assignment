import React, { useEffect, useRef } from 'react';
import HighchartsStock from 'highcharts/highstock';

/*
Component   : HighchartStockChart
Description : Uses Highchart Stock library capable to show the time range 
              selectors in the high charts when updating rangeSelector option.
*/
let chartObj = null;
const refreshedDtaeTime = `${new Date().toDateString()}  ${new Date().toTimeString()}`;
const HighchartStockChart = (props) => {
    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef && chartRef.current) {
                chartObj = HighchartsStock.stockChart(chartRef.current, {
                /* Highcharts configuration options */
                rangeSelector: {
                    allButtonsEnabled: true,
                    buttons: [{
                        type: 'day',
                        count: 3,
                        text: 'Day',
                        dataGrouping: {
                            forced: true,
                            units: [['day', [1]]]
                        }
                    }, {
                        type: 'week',
                        count: 1,
                        text: 'Week',
                        dataGrouping: {
                            forced: true,
                            units: [['week', [1]]]
                        }
                    }, {
                        type: 'all',
                        count: 2,
                        text: 'Month',
                        dataGrouping: {
                            forced: true,
                            units: [['month', [1]]]
                        }
                    }],
                    buttonTheme: {
                        width: 60
                    },
                    selected: 3
                },
                title: {
                    text: 'Connection details',
                    align: 'left'
                },
            
                subtitle: {
                    text: refreshedDtaeTime ? "Refreshed on:  "+refreshedDtaeTime:"",
                    align: 'left'
                },
            
                yAxis: {
                    title: {
                        text: 'Connections'
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                },  
                          
                series: props.seriesData,
                xAxis: {
                    type: 'datetime',
                    startOnTick: true,
                    endOnTick: true,
                    dateTimeLabelFormats: {
                        day: '%b %e `%y'
                    }
                },
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            });
        }
        return () => {
            if (chartObj) {
                chartObj.destroy();
            }
        };
    }, []);

    return <div className="chart-container" ref={chartRef}></div>;
};

export default HighchartStockChart;
