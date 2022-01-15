import React, { Component } from 'react';
import { render } from 'react-dom';
import { Parent } from './parent';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Parent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
