import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-6 row blueRow">
            <p className="col-4 prodName">{this.props.name}</p>
            <div className="col-1"></div>
            <p className="col-3 prodPrice">
              {this.props.amount} x {this.props.price}&#x20aa;
            </p>
            <div className="col-4">Subtotal={this.props.subtotal}&#x20aa;</div>
          </div>

          <div className="col-5"></div>
        </div>
      </div>
    );
  }
}
