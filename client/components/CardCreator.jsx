import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addLocation } from '../Redux/reducers/cardSlice.js';


const CardCreator = () => {
  const [inputValue, setInputValue] = useState('');

  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the state with the input value
  };

  useEffect(() => {
    console.log(cards); // Log the updated state whenever `card` changes
  }, [cards]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (inputValue !== '' && !cards.restaurantList.includes(inputValue)) {
      dispatch(addLocation(inputValue)); // Dispatch the action with the input value as the payload
      setInputValue(''); // Clear the input value after submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="location-text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          // aria-label=""
          type="submit"
        >
          Add New Location
        </button>
      </form>
    </div>
  )
};

export default CardCreator;