import React from "react";
import LineChartDashboardJSX from "../Presentation/lineChartDashboard.jsx";

// Raw data for chart
const data = [
  { endpoint: "/home", time: '2023-10-08T02:18:17.735Z', requests: 2364, special: true },
  { endpoint: "/home", time: '2023-10-07T02:23:17.735Z', requests: 1132 },
  { endpoint: "/home", time: '2023-10-06T02:03:17.735Z', requests: 3433, special: true },
  { endpoint: "/product", time: '2023-10-07T02:13:17.735Z', requests: 1563 },
  { endpoint: "/product", time: '2023-10-06T02:12:17.735Z', requests: 1563 },
  { endpoint: "/contact", time: '2023-10-07T02:13:17.735Z', requests: 2298, special: true },
  { endpoint: "/product", time: '2023-10-08T02:17:17.735Z', requests: 3198, special: true },
  { endpoint: "/contact", time: '2023-10-08T02:13:17.735Z', requests: 1950, special: true },
  { endpoint: "/contact", time: '2023-10-06T02:01:17.735Z', requests: 2800 },
]


// Converting raw data to consumable series data:
let seriesData = {};
let endpointsList = []

data.forEach(item => {
  const endpoint = item.endpoint;
  const time = new Date(item.time).getTime();
  const requests = item.requests;

  if (!seriesData[endpoint]) {
    seriesData[endpoint] = [];
  }

  seriesData[endpoint].push([time, requests]);

  endpointsList.push(endpoint);
  endpointsList = endpointsList.filter((item, index) => endpointsList.indexOf(item) === index);
});

// Creating initial series for Highchart:
let series = Object.keys(seriesData).map(endpoint => ({
  name: endpoint,
  data: seriesData[endpoint].sort((a, b) => a[0] - b[0]) // Sorting by timestamp
}));


// Main Line Chart Dashboard component starts.
class LineChartDashboard extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      isHideChart : false, 
      chartSeries:series, 
      endpointsList: endpointsList,
      showRangeChartView: false
    };
    };
        
    //Function() : Hides the chart on click of Hide Button
    onHideClick = () =>{
      this.setState({
        isHideChart : true
      });
    }

    //Function() : Updates the chart on the basis of the "Endpoint" dropdown 
    endpointItemClick = (endpoint) =>{
      let updatedSeries = series.filter(item => item.name === endpoint);
      this.setState({
        chartSeries: endpoint? updatedSeries:series,
      });
    }

    //Function() : Updateds the chart on the basis of the "Endpoint" dropdown 
    onResetClick = () =>{
      this.setState({
        chartSeries: series,
        isHideChart : false,
        showRangeChartView: false
      });
    }

    //Function() : Toggles range selector and the normal view with the same button.
    toggleRangeSelector = () =>{
      this.setState({
          showRangeChartView: !this.state.showRangeChartView
      });
    }

    render() {
      return <LineChartDashboardJSX 
              state={this.state} 
              onHideClick={this.onHideClick}
              onResetClick={this.onResetClick}
              endpointItemClick={this.endpointItemClick}
              toggleRangeSelector={this.toggleRangeSelector}
            />;
    }
}

export default LineChartDashboard;