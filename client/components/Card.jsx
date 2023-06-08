import React, { useState } from 'react';
import { deleteCard } from '../Redux/reducers/cardSlice';
import UpdateWindowPopUp from './UpdateCardPopUp.jsx';
import { useDispatch } from 'react-redux';
import StarRating from './StarRating.jsx';

const Card = props => {

  const { id, restaurantName, address, foodExperience } = props;

  const dispatch = useDispatch();

  // functions for pop up window that shows when creating entry
  const [creatorOpen, setCreatorOpen] = useState(false); // determines condition for popup or not

  const handleClose = () => setCreatorOpen(false); // close editing window

  // edit entry
  const handleClickEdit = (e) => {
    setCreatorOpen(true);
  }

  // delete entry
  const handleClickDelete = (e) => {
    dispatch(deleteCard(e.target.id));
  };


  return (
    <div id={id} key={id} className="card">
      <h3
        className='restaurantName'>{restaurantName}</h3>
      <h5 className='restaurantLocation'>{address}</h5>
      <p className='writtenExperience'>{foodExperience}</p>
      <div>
        <button id={id} className='editButton' onClick={handleClickEdit}>Edit</button>
        <button id={id} className='deleteButton' onClick={handleClickDelete}>Delete</button>
      </div>
      <UpdateWindowPopUp id={id} isOpen={creatorOpen} onClose={handleClose} />
    </div>
  );
};

export default Card;