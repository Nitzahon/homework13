import React, { Component } from "react";
import "./App.css";
import home from "./home.svg";
import supermarket from "./supermarket.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from './components/Cart'
import Home from './components/Home.js'

export default class App extends Component {
  state = {
    flag: false,
    products: [
      {
        name:'Pre-made Desktop',
        price:100
      },
      {
        name:'Paper',
        price:1
      },
      {
        name:'Pen',
        price:10
      },
      {
        name:'Disk',
        price:5
      }
    ],
    Cart: [
      {

      }
    ],
    buy: []
  };
atc=()=>{
  this.setState({Cart:[]});
}
  show = () => {
    if (this.state.flag == true) {
      return (
        <div>
          {/* <Cart /> */}
          true
        </div>
      );
    } else {
      return (
        <div>
          <div>
          {this.state.products.map((element)=>{
        return <Home name={element.name} price={element.price} addtoCart={this.atc}/>
      })}
          false
        </div>
        <div>

        </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <button
              onClick={() => {
                this.setState({ flag: false });
              }}
            >
              <img src={home} className="App-logo" alt="homepage" />
            </button>
          </div>
          <div className="col-10"><p className="titleCard">SV-SHOP</p></div>
          <div className="col-1">
            <button
              onClick={() => {
                this.setState({ flag: true });
              }}
            >
              <img src={supermarket} className="App-logo" alt="cart" />
            </button>
          </div>
        </div>

        {this.show()}
      </div>
    );
  }
}
