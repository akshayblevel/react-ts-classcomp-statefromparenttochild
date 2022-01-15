# Pass State from Parent To Child Component

index.tsx
```js
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

```

Parent.tsx
```js
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

```

child.tsx
```js
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

```

![image](https://user-images.githubusercontent.com/38757471/149622171-4a847980-704a-4d06-bc97-5f6570727485.png)
