
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Tracker } from './Tracker.js';


class MyComponentClass extends React.Component {
  render(){
    return (
      <div>
        <Tracker />
      </div>
    )
  }
}

ReactDOM.render(
  <MyComponentClass/>, 
  document.getElementById('root')
);

export default App;
