import React, { Component } from "react";
import { Container } from "react-bootstrap";

import * as d3 from "d3";

class Home extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    d3.select(this.chartRef.current).append("li").text("come here");
  }

  render() {
    return <div className="container" ref={this.chartRef}></div>;
  }
}

export default Home;
