import React, { Component } from 'react';
import Tile from '../../components/Tile';

class KanbanContainer extends Component {


  // Add a new tile to To-Do
  // toDo is an array of objects, object holds the title, description, and column of each toDo
  // Each column will display the to-Dos with the correspondign column name
  // Title, description
  // Move tiles up or down a column
  // When in the to-do, can't move the tile left
  // When in the done, can't move the tile right

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      toDos: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveRight(id) {
    this.state.toDos.map((item) => {
      if (id === item.id) {
        if (item.column === 3) {
          return null;
        } else {
          item.column = item.column + 1;
        }
        this.forceUpdate();
      }
      return this.state.toDos;
    })
  }

  moveLeft(id) {
    this.state.toDos.map((item) => {
      if (id === item.id) {
        if (item.column === 1) {
          return null;
        } else {
          item.column = item.column - 1;
        }
        this.forceUpdate();
      }
      return this.state.toDos;
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      title: '',
      description: '',
      toDos: [...this.state.toDos,
      {
        id: Math.random(),
        title: this.state.title,
        description: this.state.description,
        column: 1
      }
      ]
    })
  }

  render() {
    const { title, description, toDos } = this.state;

    return (
      <div>
        <div>
          <h3>Add new tile</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={this.handleChange} name="title" />
            <label>Description</label>
            <input type="text" value={description} onChange={this.handleChange} name="description" />
            <button type="submit" value="" alt="Submit a to-do"> Submit</button>
          </form>
        </div>
        <h1>Kanban Board</h1>
        <div className="column">
          <h2>To-Do</h2>
          {
            toDos.map((item) => {
              if (item.column === 1) {
                return (
                  <Tile data={item} key={Math.random()} moveRight={this.moveRight} moveLeft={this.moveLeft}
                  />
                )
              }
              else {
                return null;
              }
            })
          }
        </div>
        <div className="column">
          <h2>Doing</h2>
          {
            toDos.map((item) => {
              if (item.column === 2) {
                return (
                  <Tile data={item} key={Math.random()} moveRight={this.moveRight} moveLeft={this.moveLeft} />
                )
              }
              else {
                return null;
              }
            })
          }
        </div>
        <div className="column">
          <h2>Done</h2>
          {
            toDos.map((item) => {
              if (item.column === 3) {
                return (
                  <Tile data={item} key={Math.random()} moveRight={this.moveRight} moveLeft={this.moveLeft} />
                )
              } else {
                return null;
              }
            })
          }
        </div>
      </div>
    )
  };
};

export default KanbanContainer;