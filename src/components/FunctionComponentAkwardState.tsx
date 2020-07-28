/*
 * Class components have a strong identify : they are the same between renders
 * This is why when each setTimeout resolves, it reads the latest available value.
 * In fact, others values are gone, they are no longer in memory.
 * */

import React, { Component } from "react";

export default class AkwardState extends Component {
  render() {
    return <p>Hello</p>;
  }
}
