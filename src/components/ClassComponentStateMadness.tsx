import React, { Component } from "react";

interface Props {
  name: string;
}

const trace = (str: string, count: number) => {
  console.log(`${str}, count=${count}`);
};

interface State {
  count: number;
}

export default class StateMadness extends Component<Props, State> {
  state = {
    count: 0,
  };

  increment() {
    this.setState({ count: 10 });
    trace("{1}", this.state.count);

    this.setState({ count: 100 });
    trace("{2}", this.state.count);

    this.setState(
      (state) => {
        trace("(3)", state.count);
        trace("(3-this)", this.state.count);
        return { count: state.count + 1000 };
      },
      () => {
        trace("{()(3)}", this.state.count);
      }
    );

    this.setState({ count: 1000 });
    trace("{4}", this.state.count);

    this.setState(
      (state) => {
        trace("(5)", state.count);
        trace("(5-this)", this.state.count);
        return { count: state.count + 10000 };
      },
      () => {
        trace("{()(5)}", this.state.count);
      }
    );

    this.setState(
      (state) => {
        trace("(6)", state.count);
        trace("(6-this)", this.state.count);
        return { count: state.count + 100000 };
      },
      () => {
        trace("{()(6)}", this.state.count);
      }
    );
  }

  render() {
    return (
      <>
        <button onClick={() => this.increment()}>{this.props.name}</button>
        <b style={{ display: "inline", margin: "0 0 0 20px" }}>
          Current count {this.state.count}
        </b>
      </>
    );
  }
}
