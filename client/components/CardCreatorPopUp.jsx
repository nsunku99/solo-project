import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../Redux/reducers/cardSlice';

// create pop up window that shows when creating entry

const WindowPopUp = props => {

  const { isOpen, onClose } = props;

  // Logic
  // all inputs as form data
  // button at bottom to save and close
  // button save/close onSubmit triggers dispatch to reducer to create marketList component with entries
  // individual card entries populated with the respective information via card display
  // props:
  // title
  // address
  // thoughts
  // rating
  // images

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form behavior

    // Access the form data
    const formData = new FormData(e.target);

    const filledFields = {
      restaurantName: formData.get('restaurantName'),
      address: formData.get('address'),
      foodExperience: formData.get('foodExperience')
    }

    dispatch(addCard(filledFields));

  }

  if (isOpen) {
    return (
      <div className='overlay'>
        <div className='popUpBody'>
          <h3>New Restaurant Entry</h3>
          <form className='entryCardForm' onSubmit={handleSubmit}>
            <div>
              <span>Where'd Ya Go?</span>
              <input name='restaurantName' type='text' />
            </div>
            <div>
              <span>Where's it at?</span>
              <input name='address' type='text' />
            </div>
            <div>
              <span>So tell me about your experience</span>
              <textarea name='foodExperience' />
            </div>
            <button onClick={onClose}>Save and Close</button>
          </form>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default WindowPopUp