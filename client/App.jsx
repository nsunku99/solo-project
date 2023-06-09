import React, { useEffect } from 'react';
import CardContainer from './containers/CardContainer.jsx';
import './styles.scss'
import { initializeState } from './Redux/reducers/cardSlice.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  return (
    <div id='app'>
      <nav className='navBar'>
        <h1>Personal Food Diary!!</h1>
        <div>
          <button>
            <span>About</span>
          </button>
          <button>
            <span>Help</span>
          </button>
        </div>
      </nav>
      <div>
        {/* <p>test</p>
        // nav bar / top bar
        // side bar */}
        <CardContainer />
      </div>

    </div>
  )
};

export default App;