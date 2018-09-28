import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Homepage} from '../lms/homepage';
import {Login} from '../lms/login';
import {listLesson} from '../lms/list-lesson';

class Redirect extends React.Component {
  
    render() {
      return (
        <BrowserRouter>
          <div>
            <Route path="/" component={Login} exact={true}></Route>
            <Route path="/homepage" component={Homepage}></Route>
            <Route path="/list-lesson" component={listLesson}></Route>
          </div>
        </BrowserRouter>
      );
    }
  }

  export {Redirect};