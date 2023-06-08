import React, { useState } from 'react';

const StarRating = () => {

  const [stars, setStars] = useState(0); // set Star Index

  return (
    <div className='star-ratings'>
      {[...Array(5)].map((val, idx) => {
        return (
          <button
            key={idx}
            id={idx}
            className={idx >= stars ? 'on' : 'off'}>
            <span>&#9733;</span>
          </button>)
      }
      )}
    </div>
  )
}

export default StarRating;