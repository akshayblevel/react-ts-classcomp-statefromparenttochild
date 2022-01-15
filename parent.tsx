import React, { Component } from 'react';
import { render } from 'react-dom';
import { Child } from './child';
import './style.css';

interface ParentState {
  name: string;
  age: number;
}

export class Parent extends Component<ParentState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Akshay',
      age: 40,
    };
  }

  render() {
    return (
      <div>
        <Child childState={this.state} />
      </div>
    );
  }
}
