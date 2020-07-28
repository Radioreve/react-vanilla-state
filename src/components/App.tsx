import React, { Component } from "react";
import ClassComponentSetStateMadness from "./ClassComponentStateMadness";

export default class App extends Component {
  render() {
    return (
      <main>
        <ClassComponentSetStateMadness name="State Madness" />
      </main>
    );
  }
}
