import React, { Component } from 'react';
import { inspect } from 'util';

export const Item = ( props ) => {

  return(
    <div>
      <ul>
        {
          props.rows.map(( row, index ) => {
            return(
              <li key={ index }>
                <button className="delete-button" onClick={ props.deleteRow.bind( this, row ) }>
                  Delete Row
                </button>
              </li>
            )
          })
        }
      </ul>
      <button className="add-button" onClick={ props.addRow.bind( this ) }>Add Row Item</button>
    </div>
  );

}
