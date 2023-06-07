import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import actions from action creators file
// import * as actions from '../actions/actions';
// import child components...
import CardCreator from '../components/CardCreator.jsx';
// import MarketsDisplay from '../components/MarketsDisplay.jsx';
// import MarketCreator from '../components/MarketCreator.jsx';

const CardContainer = () => {

  // returns a function that can dispatch action creators
  // const dispatch = useDispatch();

  // const newMarket = (input) => dispatch(actions.addMarketActionCreator(input));
  // const addCard = (input) => dispatch(actions.addAddCardActionCreator(input));
  // const deleteCard = (input) => dispatch(actions.addDeleteCardActionCreator(input));

  return (
    <div className="innerbox">
      { /* add components here... */}
      <h1>container test</h1>
      <CardCreator />
    </div>
  );
};

export default CardContainer;