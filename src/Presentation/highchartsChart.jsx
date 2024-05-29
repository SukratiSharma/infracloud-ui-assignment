import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

/*
Component   : HighchartsChart
Description : Uses Highchart library to show the Line chart on the 
              basis of the options and data series provided.
*/
let chartObj = null;
const HighchartsChart = (props) => {
    const chartRef = useRef(null);
    const refreshedDtaeTime = `${new Date().toDateString()}  ${new Date().toTimeString()}`;
    useEffect(() => {
        if (chartRef && chartRef.current) {
            chartObj = Highcharts.chart(chartRef.current, {
                /* Highcharts configuration options */
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

export default HighchartsChart;
