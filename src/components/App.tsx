import React, { Component } from "react";
import ClassComponentSetStateMadness from "./ClassComponentStateMadness";

export default class App extends Component {
  render() {
    return (
      <>
        <ClassComponentSetStateMadness name="State Madness" />
      </>
    );
  }
}
