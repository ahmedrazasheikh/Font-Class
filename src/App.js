import React from 'react';
import OLDComponent from './text';
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'John',
      isLoggedIn: false,
    };
  }

  render() {
    // Access state variables using "this.state.variableName"
    const { count, name, isLoggedIn } = this.state;

    return (
      <div>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <p>Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>



        <OLDComponent/>
      </div>
    );
  }
}

export default MyComponent;
