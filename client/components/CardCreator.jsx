import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WindowPopUp from './CardCreatorPopUp.jsx';

const CardCreator = () => {

  const [creatorOpen, setCreatorOpen] = useState(false); // determines condition for popup or not
  const handleOpen = () => setCreatorOpen(true); // open editing window
  const handleClose = () => setCreatorOpen(false); // close editing window

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