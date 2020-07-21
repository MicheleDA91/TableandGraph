import React, { Component } from 'react'
import Handsontable from "handsontable";
import { HotTable } from '@handsontable/react';
import "handsontable/dist/handsontable.min.css";



const myData = [
  [5, 10, 3, 5, 2, 3, 5, 1],
    [9, 9, 3, 10, 8, 7, 7, 2],
    [5, 1, 10, 6, 7, 9, 4, 8]
];

const myColumn = [
  ["prima colonna"], ["seconda colonna"], ["terza colonna"],["quarta colonna"]
]

const myRow = [
  ["riga 1"],["riga 2"],["riga 3"],["riga 4"],["riga 5"]
]


class Table extends Component {
    constructor(props){
        super(props);

    this.state = {
        hotSettings: {
          data: myData,
          rowHeaders: myRow,
          dropdownMenu: true,
          rowHeights: 30,
          colHeaders: myColumn,
          licenseKey: "non-commercial-and-evaluation",
          contextMenu: {
              items: {
                'row_above': {
                  name: 'Insert row above this one (custom name)'
                },
                'row_below': {},
                'remove_row': {},
                'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
                'clear_custom': {
                  name: 'Clear all cells (custom)',
                  callback: function() {
                    this.clear();
                  }
                }
              }
            }
        },
       
      };
    }
    
      render() {
        return (
          <div>
            <HotTable settings={this.state.hotSettings} />
              </div>
          
        );
      }
    }

export default Table;