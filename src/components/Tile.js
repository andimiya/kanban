import React from 'react';

const Tile = (props) => {



  return (
    <div>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <button onClick={() => props.moveLeft(props.data.id)}> -- Left</button>
      <button onClick={() => props.moveRight(props.data.id)}>Right --</button>
    </div>
  )
}

export default Tile;