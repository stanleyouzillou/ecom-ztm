import React, { Component } from 'react';
import HomePage from './routes/homepage/homepage.component';

import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
