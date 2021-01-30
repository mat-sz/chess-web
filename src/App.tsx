import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { StateType } from './reducers';

export const App: React.FC = () => {
  const board = useSelector((state: StateType) => state.board);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <div className="board">
              {board.map((_, i) => {
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
