import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { initializeState } from '../Redux/reducers/cardSlice.js';


const CardsDisplay = () => {

  const boolForInitialize = useSelector((state) => state.cards.restaurantList.length === 0); // check if anythings been created
  const dispatch = useDispatch();

  // also moving data to/from backend
  const data = useSelector((state) => state.cards); // get data to send to backend
  const [first, setFirst] = useState(true);

  useEffect(() => { // Make a fetch request to send the data to the backend via useEffect

    let storedState;

    if (first) {
      axios.get('/api/cards')
        .then(response => {
          console.log('entered get response')
          storedState = response.data;
          console.log('data from get', storedState);
          dispatch(initializeState(storedState));
          setFirst(false);
        })
        .catch(err => console.log('get error', err))
    } else {
      axios.post('/api/cards', data, {
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      })
        .then(response => console.log('Backend response:', response))
        .catch(error => console.error('Request error:', error));
    }

    console.log('after useeffect data', storedState)
  }, [data])

  const cardBox = [];
  const { restaurantList } = useSelector((state) => state.cards); // obtain restaurant array

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