import React, { useState } from 'react';

function Tweet(props){
    const [count, setCount ] = useState(0);
    const increment = ()=>{
    setCount(count + 1);
  }
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <button className="like" onClick={ increment }>Like</button>
            <p>{count}</p>
        </div>
    );
};

export default Tweet