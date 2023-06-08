import React from 'react';

const Card = props => {

  const { id, restaurantName } = props;

  // const { marketId, location, cards, percent, addCard, deleteCard } = props;

  // // invoke element that button clicks
  // const handleClickAdd = (e) => {
  //   addCard(marketId);
  // };

  // // invoke element that button clicks
  // const handleClickDelete = (e) => {
  //   deleteCard(marketId);
  // };


  return (
    <div className="card">
      {/* <div>
        <label htmlFor='marketId'>Market ID: </label>
        <span id='marketId'>{marketId}</span>
      </div>
      <div>
        <label htmlFor='marketId'>Location: </label>
        <span id='Location'>{location}</span>
      </div>
      <div>
        <label htmlFor='marketId'>Cards: </label>
        <span id='cards'>{cards}</span>
      </div>
      <div>
        <label htmlFor='marketId'>% of total: </label>
        <span id='percent'>{percent}</span>
      </div> */}
      <h3
        id={id}
        className='restaurantName'>{restaurantName}</h3>
      <h5 className='restaurantLocation'>restaurant location</h5>
      <textarea />
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Card;