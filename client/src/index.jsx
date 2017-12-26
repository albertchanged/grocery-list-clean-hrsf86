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
  addGroceryItem(quantity, description) {
    for (var i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].description.toLowerCase() === description.toLowerCase()) {
        this.state.list[i].quantity += Number(quantity);
        this.setState({
          list: this.state.list
        })
        break;
      } else {
        this.setState({
          list: this.state.list.concat([
            {
              id: this.state.list[this.state.list.length - 1].id + 1,
              quantity: Number(quantity),
              description: description
            }
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
        <AddGrocery onClick={this.addGroceryItem.bind(this)} />
        <GroceryList list={this.state.list} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));