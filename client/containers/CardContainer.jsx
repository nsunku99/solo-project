import React from 'react';

import CardCreator from '../components/CardCreator.jsx';
import CardsDisplay from '../components/CardDisplay.jsx';


const CardContainer = () => {

  return (
    <div className="innerbox">
      <CardCreator />
      <CardsDisplay />
    </div>
  );
};

export default CardContainer;