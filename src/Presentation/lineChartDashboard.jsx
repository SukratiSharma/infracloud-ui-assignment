import HighchartsChart from "./highchartsChart.jsx";
import HighchartsStockChart from "./highchartStockCharts.jsx";
import ChartDasboardHeader from "./chartDasboardHeader.jsx";
import React from "react";

/* 
Parent UI component
Child Comonents:
      1. ChartDasboardHeader 
      2. HighchartsChart 
      3. HighchartsStockChart
Functionality:
      Toggles highcharts behaviour on the basis of Switch to: button.
Highcharts meaning:
       - HighchartsChart (to show data poins)
       - HighchartsStockChart (top show time range) 
*/        

export default function LineChartDashboardJSX(props) { 
    return (
        <section>
            <header className="heading bg-light">
                <h1>Connection Requests</h1>   
                <h5>Show the consolidated data of the connection requests for each endpoints.</h5> 
            </header>
            <section className="section-chart" id="section-chart-id">

                {/* Render chart header with interactive dropdowns */}
                <ChartDasboardHeader 
                    onHideClick = {props.onHideClick}
                    endpointsList = {props.state.endpointsList}
                    seriesData={props.state.chartSeries}
                    endpointItemClick = {props.endpointItemClick}
                    onResetClick= {props.onResetClick}
                    showRangeChartView={props.state.showRangeChartView}
                    toggleRangeSelector={props.toggleRangeSelector}
                />

                {/* Render highcharts */}
                {!props.state.isHideChart ?
                    <React.Fragment>
                        { !props.state.showRangeChartView? 
                        <HighchartsChart 
                            key={JSON.stringify(props.state.chartSeries)}
                            seriesData={props.state.chartSeries}
                            XAxisInfo={props.state.XAxisInfo}
                            showRangeChartView={props.state.showRangeChartView}
                            />
                            :
                        <HighchartsStockChart
                            key={JSON.stringify(props.state.chartSeries)}
                            seriesData={props.state.chartSeries}
                            XAxisInfo={props.state.XAxisInfo}
                            showRangeChartView={props.state.showRangeChartView}
                            />
                        }
                    </React.Fragment>
                
                :
                
                    <div className="reset-msg">Please click on RESET button to view the chart.</div>
                }
            </section>
        </section>
    ) 
}
