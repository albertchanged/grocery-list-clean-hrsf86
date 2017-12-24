import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries">
    {
      props.list.map(listItem => (
        <GroceryItem 
          listItem={ listItem }
          key={ listItem.id }
        />
      ))
    }
  </div>
)

export default GroceryList;