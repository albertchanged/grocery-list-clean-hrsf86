import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      description: ''
    }
  }
  updateList() {
    this.setState({
      quantity: document.getElementById('quantityInput').value,
      description: document.getElementById('nameInput').value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // Send quantity/description state back up to App
    this.props.onClick(this.state.quantity, this.state.description);
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="form-control" type="text" id="nameInput" />
          <p>Quantity</p>
          <input className="form-control" type="text" id="quantityInput" />
          <br/><br/>
          <button onClick={this.updateList.bind(this)}>Add Grocery</button>
        </form>
      </div>
    );
  }
}

export default AddGrocery;

