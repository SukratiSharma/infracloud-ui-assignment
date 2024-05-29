# infracloud-ui-assignment

<!-- ABOUT THE PROJECT -->
## About The Project
  Design a line chart to visualize the provided data. The x-axis should represent date/time, and
  the y-axis should represent the number of requests. Use a single line chart to display the data.
  #### Key Points:
  1. Used the provided data.
  2. Created a line chart using any preferred charting library i.e. Highcharts Library.
  3. Connection Requests are presented on Y-Axis.
  4. Dates are presented on X-axis.
  5. When hovering over the chart, it is showing a tooltip showing the endpoint, date, time and number of requests. 
  7. Implemented a user-friendly features like
      * Toggle Button to switch to Chart feature which allows filtering through time range.
      * Filter charts on the basis of Endpoints using Dropdown.


### Built With

1. Node (Version - 18.17.0)
2. React Js (Version - 18.3.1)
3. HighCharts Library (Version - 11.4.1)

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation and Setup

1. Install NPM packages
   ```sh
   npm install
   ```
2. Start project
   ```sh
   npm start
   ```
   
### Project and Design Walkthrough

 ##### 1. On the default load, Line Chart will represent with all the endpoints with their data.
 
 ####  [Design Note] - Highcharts are used as those are ideal for creating interactive and responsive charts with extensive customization and dynamic data updates, enhancing the user experience for visualizing complex datasets
   ![1 DefaultView](https://github.com/SukratiSharma/infracloud-ui-assignment/assets/29679942/e01f187f-0872-4119-aff6-ea29e42889b5)

 ##### 2. Tooltip with details - [Date/Time, Endpoint, Requestes ], can be seen when hover over a data point on the Line chart. Highcharts provides options to customise the Tooltip data. 
   ![3  TooltipOverEndpoint](https://github.com/SukratiSharma/infracloud-ui-assignment/assets/29679942/8c43cdfd-d331-4abd-bb55-a3c49260ed93)

 ##### 3. On selection of any Endpoint from the dropdown, Line Chart will update the legends and the data as per the selected endpoint
   ![2  EndPoint Selection](https://github.com/SukratiSharma/infracloud-ui-assignment/assets/29679942/36460fe5-f2d0-4693-be2e-7c06252cdee7)

 ##### 4. Filter on the basis of Time Range - Click on "Switch to: Time Range Selector View", as shown in above screenshot, and it will show the chart with the Time frames on X Axis, datepickers to select the range and Butttons to show data according to day, week and month.

 ####     [Design Note] - Here, For Time Range Filteration, Highcharts stock library has been used specifically. Highcharts Stock provides built-in tools for selecting and zooming into specific time ranges. Users can easily drag sliders or select predefined ranges making it highly interactive and user-friendly which was not possible using normal Highcharts.
  ![4  TimeRangeSelection](https://github.com/SukratiSharma/infracloud-ui-assignment/assets/29679942/450a3257-efd4-4da2-a5d0-95157793a1a4)

 ##### 5. Reset and Hide Buttons added as per the design screenshot given
 #####    On Click of Reset button, Chart will recover its origional state as same as on load.
 #####    On Click of Hide Button, Chart will not be visible.
  ![5  Hide Chart](https://github.com/SukratiSharma/infracloud-ui-assignment/assets/29679942/1933b4c6-07e0-40db-8d4a-4185d31de03b)


   





