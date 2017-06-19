import React, { Component } from 'react';
import { Item } from './item.component';
import { inspect } from 'util';

export default class ItemContainer extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      rows: []
    }
    // register w/ constuctor so when we pass down, children call these functions w/ this context
    this.deleteRow = this.deleteRow.bind( this );
    this.addRow = this.addRow.bind( this );
  }

  deleteRow( rowToDelete ) {
    let currentRows = this.state.rows;
    return currentRows.map(( row, index ) => {
      if( row === rowToDelete ) {
        currentRows.splice( index, 1 );
        return this.setState({
          rows: currentRows
        });
      } else {
        return console.log(`Do not Delete Row ${ row } at Index ${ index }`);
      }
    });
  }

  addRow( ) {
    this.setState({
      rows: this.state.rows.concat( this.state.rows.length + 1 )
    });
  }

  render() {
    return(
      <main>
        <h1>This is Item Container</h1>
        <Item
          rows={ this.state.rows }
          deleteRow={ this.deleteRow }
          addRow={ this.addRow }
        />
      </main>
    );
  }
}
