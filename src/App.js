import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import home from "./home.svg";
import supermarket from "./supermarket.svg";
import Cart from "./components/Cart";
import Home from "./components/Home.js";

export default class App extends Component {
  state = {
    flag: false,
    products: [
      {
        name: "Pre-made Desktop",
        price: 100,
        amount: 0,
        subtotal: 0
      },
      {
        name: "Paper",
        price: 1,
        amount: 0,
        subtotal: 0
      },
      {
        name: "Pen",
        price: 10,
        amount: 0,
        subtotal: 0
      },
      {
        name: "Disk",
        price: 5,
        amount: 0,
        subtotal: 0
      }
    ],
    total: 0
  };
  atc = (ind) => {
    let temp = [...this.state.products];
    temp[ind].amount++;
    temp[ind].subtotal += temp[ind].price;
    this.setState({ total: this.state.total + temp[ind].price });
    this.setState({ products: [...temp] });
  };
  buy = () => {
    this.setState({total:0});
    let temp = [...this.state.products].map((element)=>{
      element.amount=0;
      element.subtotal=0;
      return(element)
    });
    this.setState({products:[...temp]});
  };
  show = () => {
    if (this.state.flag === true) {

      return (
        <div>
          <h2>Cart</h2>
          {this.state.products.filter((element)=>{
            return(
              element.amount!=0
            );
          }).map((element, i) => {
          
            return (
                <Cart 
                  name={element.name}
                  price={element.price}
                  amount={element.amount}
                  index={i}
                  subtotal={element.subtotal}
                />
              );
            
            })}
          <div>Total price: {this.state.total}&#x20aa;</div>
          <div>
            <button onClick={this.buy}> Buy</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row homeRow">
          <div className="col-9 shoppingList">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-6  products">List of products</div>
              <div className="col-5"></div>
            </div>

            {this.state.products.map((element, i) => {
              return (
                <Home
                  name={element.name}
                  price={element.price}
                  index={i}
                  addtoCart={this.atc}
                />
              );
            })}
          </div>
          <div className="col-3">
            <div className="spListDesc">Add</div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="row titleRow">
          <div className="col-1 homebtn">
            <button
              onClick={() => {
                this.setState({ flag: false });
              }}
            >
              <img src={home} className="App-logo" alt="homepage" />
            </button>
          </div>
          <div className="col-10 titleCardContainer">
            <p className="titleCard">SV-SHOP</p>
          </div>
          <div className="col-1 cartbtn">
            <button
              onClick={() => {
                this.setState({ flag: true });
              }}
            >
              <img src={supermarket} className="App-logo" alt="cart" />
            </button>
          </div>
        </div>
        <div className="homepage">{this.show()}</div>
      </div>
    );
  }
}
