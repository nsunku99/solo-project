import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WindowPopUp from './CardCreatorPopUp.jsx';

const CardCreator = () => {
  // const [inputValue, setInputValue] = useState('');

  const cards = useSelector((state) => state.cards);
  // const dispatch = useDispatch()

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value); // Update the state with the input value
  // };

  useEffect(() => {
    console.log('restaurant list', cards.restaurantList); // Log the updated state whenever `card` changes
  }, [cards]);


  // functions for pop up window that shows when creating entry

  const [creatorOpen, setCreatorOpen] = useState(false); // determines condition for popup or not

  const handleOpen = () => setCreatorOpen(true); // open editing window
  const handleClose = () => {
    setCreatorOpen(false)
  }; // close editing window

  return (
    <div>
      <button
        onClick={handleOpen}>
        New Entry
      </button>
      <WindowPopUp isOpen={creatorOpen} onClose={handleClose} />
    </div>
  );
}

export default CardCreator;