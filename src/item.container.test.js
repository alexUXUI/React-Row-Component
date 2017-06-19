import React from 'react';
import ReactDOM from 'react-dom/test-utils';
import App from './App';
import { mount } from 'enzyme';
import { Item } from './item.component';
import ItemContainer from './item.container';
import { inspect } from 'util';
import 'jest-enzyme';

describe(' Item Liste test Suite: ', () => {

  function prePopulate() {
    const wrapper = mount( <ItemContainer /> );
    let numberOfRows = Math.floor( Math.random() * 20 );
    console.log(`Number to test: ${ numberOfRows }`);

    for( let i = 0; i < numberOfRows; i++ ) {
      wrapper.find('.add-button').simulate('click');
    }

    return Promise.resolve({ wrapper, numberOfRows })
  }

  it( 'renders items message', () => {
    const wrapper = mount( <ItemContainer /> );
    const welcome = <h1>This is Item Container</h1>;
    expect( wrapper.contains( welcome ) ).toEqual( true );
  });

  it( 'adds a new item onClick addItem', () => {
    prePopulate().then(data => {
      let { wrapper, numberOfRows } = data;
      let componentState = wrapper.state().rows.length;
      expect( numberOfRows ).toEqual( componentState )
    });
  });

  it( ' deletes the right item from the list', () => {
    prePopulate().then(data => {
      let { wrapper, numberOfRows } = data;
      console.log(`Do i have wrapper ${ inspect( wrapper.children() ) }`);
      let componentState = wrapper.state().rows;
      let itemToDelete = componentState.length;
      console.log(`What is item to delete? ${ itemToDelete } | componentState ${ componentState }`);
    });
  });
});
