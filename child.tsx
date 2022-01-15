import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

interface ChildState {
  name: string;
  age: number;
}
export interface IChildProps {
  childState: any;
}

export class Child extends Component<IChildProps, ChildState> {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.childState.name,
      age: this.props.childState.age,
    };
  }

  render() {
    return (
      <div>
        <p>Data from child :</p>
        Name: {this.state.name} <br />
        Age: {this.state.age}
      </div>
    );
  }
}
