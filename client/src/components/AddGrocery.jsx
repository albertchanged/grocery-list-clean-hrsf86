import React from 'react';
import { groceryList } from '../../../database/data.js';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // added: true
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
        <p>Description</p>
        <input className="form-control" type="text" id="nameInput" />
        <p>Quantity</p>
        <input className="form-control" type="text" id="quantityInput" />
        <br/><br/>
        <button onClick={() => props.handleClick(props.list)}>Add Grocery</button>
      </div>
    )
  }
}

export default AddGrocery;

