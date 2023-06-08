import React from 'react';
import Card from './Card.jsx';
import { useSelector } from 'react-redux';


const CardsDisplay = () => {

  const boolForInitialize = useSelector((state) => state.cards.restaurantList.length === 0); // check if anythings been created

  const cardBox = [];
  const restaurantList = useSelector((state) => state.cards.restaurantList); // obtain restaurant array

  if (!boolForInitialize) {
    restaurantList.map((currRestaurant, idx) => {
      cardBox.push(
        <Card
          key={idx}
          id={idx}
          restaurantName={currRestaurant.restaurantName}
          address={currRestaurant.address}
          foodExperience={currRestaurant.foodExperience} />
      );
    })
  }

  return (
    <div>
      <h4>Entries</h4>
      <div className="displayBox">
        {cardBox}
      </div>
    </div>

  );
};

export default CardsDisplay;