import React from 'react';

const GroceryItem = (props) => (
  <div>
    <p>{props.listItem.description}&nbsp;{props.listItem.quantity}</p>
  </div>
)

export default GroceryItem;