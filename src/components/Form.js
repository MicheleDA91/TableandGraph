import React, { Component } from "react";


export default class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <form>
          <select
          name="chartType"
          defaultValue={false}
          onChange={this.props.setChartType}
        >
          <option value={false}>Scegli grafico...</option>
          <option value="radar">Radar</option>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="pie">Pie</option>
        </select>
        <button type="submit">Aggiungi</button>
        </form>
       </div>
    );
  }
}
