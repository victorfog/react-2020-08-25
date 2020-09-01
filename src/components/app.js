import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = { value: 1 };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState({ value: this.state.value + 1 });
  // }

  state = {
    value: 2,
    foo: 'bar',
  };

  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  componentDidMount() {
    console.log('I mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I updated!');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextState.foo === this.state.foo &&
  //     nextState.value === this.state.value
  //   ) {
  //     return false;
  //   }

  //   return true;
  // }

  render() {
    return (
      <div>
        <h1>Hello from App!</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
