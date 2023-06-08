import React from 'react';
import CardContainer from './containers/CardContainer.jsx';
import './styles.scss'

const App = () => {
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