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
    <h2>{this.props.name} price:{this.props.price}  amount:{this.props.amount}  subtotal:{this.props.subtotal}</h2>
            
            </div>
        )
    }
}
