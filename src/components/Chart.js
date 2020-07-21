import React, { Component } from 'react';
import { Line, Bar, Radar, Pie } from "react-chartjs-2";

const myData = [
  [5, 10, 3, 5, 2, 3, 5, 1],
    [9, 9, 3, 10, 8, 7, 7, 2],
    [5, 1, 10, 6, 7, 9, 4, 8]
];

const myColumn = [
  "prima colonna", "seconda colonna", "terza colonna", "quarta colonna"
];

const myRow = [
  "riga 1","riga 2","riga 3","riga 4","riga 5"
]


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartTypes: {
        radar: Radar,
        line: Line,
        bar: Bar,
        pie: Pie
      },
      chartData: {
        labels: myColumn,
      datasets: [{
        label: myRow[0],
        data: myData[0],
        borderWidth: 1,
        backgroundColor: 'rgb(255, 236, 217)'
      }, {
        label: myRow[1],
        data: myData[1],
        borderWidth: 1,
        backgroundColor: 'rgb(235, 224, 255)'
      }, {
        label: myRow[2],
        data: myData[2],
        borderWidth: 1,
        backgroundColor: 'rgb(219, 242, 242)'
      }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    };
  }

  render() {
    const Chart = this.state.chartTypes[this.props.chartType];
    return Chart ? <Chart
     data={this.state.chartData}
     options={this.state.chartData.options}
     /> : null;
  }
}

export default Chart;