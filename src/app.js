import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from './router/redirect';


class App extends React.Component {
  
  render() {
    return (
      <Redirect/>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
