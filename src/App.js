import React, { Component } from 'react';
import KanbanContainer from './containers/KanbanContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <KanbanContainer />
      </div>
    );
  }
}

export default App;
