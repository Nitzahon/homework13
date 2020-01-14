import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            index:props.index
        }

      }

    render() {
        return (
            <div>
    <h2>{this.props.name} {this.props.amount} x {this.props.price} &#x20aa; subtotal:{this.props.subtotal} &#x20aa;</h2>
            
            </div>
        )
    }
}
