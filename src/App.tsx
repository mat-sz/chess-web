import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <div className="board">
              {new Array(64).fill(undefined).map((_, i) => {
                const black = Math.floor(i / 8) % 2 === i % 2;
                return (
                  <div key={i} className={black ? 'black' : 'white'}></div>
                );
              })}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
