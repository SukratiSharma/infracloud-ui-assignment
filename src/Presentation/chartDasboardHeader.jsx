import React from "react";
/*
Component   : Chart Dashboard Header
Description : Consist of dropdowns, buttons to update the charts.
*/
export default function ChartDasboardHeader(props) { 
    let endpointsListClick = (evt) =>{
          props.endpointItemClick(evt.target.value)
    }
    return (
        <section>
            <div className="dropdown-container">
                <div className="dropdowns-list">
                    <label htmlFor="request-select" className="select-label">Endpoint</label>
                    <select id="request-select" onChange={endpointsListClick}>
                        <option value="">All</option>
                        {
                            props.endpointsList.map((endpoint, index) =>{
                                return <option key={index}>{endpoint}</option>
                            })
                        }
                    </select>
                </div>
                <div className="dropdown-container-btns">
                    <button onClick={props.toggleRangeSelector}><b>Switch To:</b> {!props.showRangeChartView? "Time Range Selector View":"Normal Chart View"}</button>
                    <button onClick={props.onResetClick}>Reset</button>
                    <button onClick={props.onHideClick}>Hide</button>
                </div>
            </div>
        </section>
    ) 
}
