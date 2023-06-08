import React from 'react';
import Card from './Card.jsx';
import { useSelector } from 'react-redux';


const CardsDisplay = () => {

  // const { addCard, deleteCard } = props;

  // initialize Market up here
  // if marketlist length is 0 / doesn't exist, skip
  // otherwise create market via iterations
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
        // <Market
        //   marketId={marketList[i].marketId}
        //   location={marketList[i].location}
        //   cards={marketList[i].cards}
        //   percent={marketList[i].percent}
        //   addCard={addCard}
        //   deleteCard={deleteCard} />
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