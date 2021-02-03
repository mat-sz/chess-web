import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { Board } from './components/Board';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <div className="board-wrapper">
              <Board />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
