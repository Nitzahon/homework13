import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
                index:props.index,
                name:props.name,
                price:props.price,
                amount:props.amount
        }
      }
    addItem = () =>{
        this.props.addtoCart(this.state.index);
    }
    render() {
        return (
            
<div className="row">
                <div className="col-1"></div>
                <div className="col-6 row blueRow">
        <p className="col-3 prodName">{this.state.name}</p>
        <p className="col-1">=</p>
                    <div className="col-3"></div>
                    <p className="col-2 prodPrice">{this.state.price}&#x20aa;</p>
                    <div className="col-1"></div>
                    <button onClick={this.addItem} className="col-1 btn-info">+</button>
                </div>

                <div className="col-5"></div>
</div>
        )
    }
}
