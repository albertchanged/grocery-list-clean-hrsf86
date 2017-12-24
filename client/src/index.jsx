import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';
import { groceryList } from '../../database/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList
    }
  }
  handleClick() {
    var nInput = document.getElementById('nameInput').value;
    var qInput = document.getElementById('quantityInput').value;

    for (var i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].description === nInput) {
        this.state.list[i].quantity += Number(qInput);
        this.setState({
          list: this.state.list
        })
        break;
      } else {
        console.log('Why are you still going in here');
        this.setState({
          list: this.state.list.concat([
            {id: this.state.list[this.state.list.length - 1].id + 1,
            quantity: Number(qInput),
            description: nInput}
          ])
        });
      }
    }
  }
  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <p>Description</p>
        <input className="form-control" type="text" id="nameInput" />
        <p>Quantity</p>
        <input className="form-control" type="text" id="quantityInput" />
        <br/><br/>
        <button onClick={this.handleClick.bind(this)}>Add Grocery</button>
        {/* <AddGrocery onClick={this.handleClick.bind(this)} /> */}
        <GroceryList list={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));