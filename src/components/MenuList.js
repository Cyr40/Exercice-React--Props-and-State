import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((foodItem) => (
        <MenuItem foodItem={foodItem} />
      ))}
    </div>
  );
}

export default MenuList;
{
  /*render a MenuItem component to each element of the props array*/
}
