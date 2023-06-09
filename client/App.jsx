import React, { useEffect } from 'react';
import CardContainer from './containers/CardContainer.jsx';
import './styles.scss'
import { initializeState } from './Redux/reducers/cardSlice.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  // const dispatch = useDispatch();
  // const state = useSelector(state => state.cards);
  // // // initialize from existing data
  // useEffect(() => {
  //   axios.get('/api')
  //     .then(response => {
  //       console.log('is this even loading')
  //       const data = response.data;
  //       console.log('response data, ', data);
  //     })
  //     .catch(err => console.log('axios get error', err))

  // }, [state]); // empty array prevents useEffect from being rerun

  return (
    <div id='app'>
      <h1>Personal Food Diary</h1>
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