import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Chart from './components/Chart';
import Form from './components/Form';


class App extends Component{
    constructor(props) {
      super(props);

      this.state = {
        chartType: false
      }
    }

    setChartType = e => {
      const chartType = e.currentTarget.value;
      this.setState({
        ...this.state,
        chartType
      });
    };
  


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Table />
      <br />
      <div className='modal'>
      <Chart
       chartType={this.state.chartType}
             />
      <Form setChartType={this.setChartType} />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
