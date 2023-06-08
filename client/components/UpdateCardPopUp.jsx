import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCard } from '../Redux/reducers/cardSlice';

// show pop up window that shows when updated entry

const UpdateWindowPopUp = props => {

  const { isOpen, onClose, id } = props;

  const currentRestaurant = useSelector(state => state.cards.restaurantList[id]); // id serves as index

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form behavior

    // Access the form data
    const formData = new FormData(e.target);

    // Save form data
    const filledFields = {
      restaurantName: formData.get('restaurantName'),
      address: formData.get('address'),
      foodExperience: formData.get('foodExperience')
    }

    const { restaurantName, address, foodExperience } = filledFields;

    // make sure fields aren't blank
    if (restaurantName !== '' && address !== '' && foodExperience !== '') {
      dispatch(updateCard({ id, updatedEntry: filledFields })); // update state
      onClose(); // close window
    }
  }

  if (isOpen) {
    return (
      <div className='overlay'>
        <div className='popUpBody'>
          <h3>Update Restaurant Entry</h3>
          <form className='entryCardForm' onSubmit={handleSubmit}>
            <div className='forGrid'>
              <div>
                <span>Where'd Ya Go?</span>
                <input name='restaurantName' type='text' defaultValue={currentRestaurant.restaurantName} />
              </div>
              <div>
                <span>Where's it at?</span>
                <input name='address' type='text' defaultValue={currentRestaurant.address} />
              </div>
              <div>
                <span>So tell me about your experience</span>
                <textarea name='foodExperience' defaultValue={currentRestaurant.foodExperience} />
              </div>
            </div>
            <div className='button-container'>
              <button type='submit'>Save and Close</button>
              <button onClick={onClose}>Close</button>
            </div>
          </form>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default UpdateWindowPopUp