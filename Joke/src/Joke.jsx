import React from "react";

function Joke(props) {

    return (    
    <div className="container">
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        <p>{props.comments}</p>
        <span className="fa fa-arrow-up">{props.upvote}</span>
        &nbsp;&nbsp;&nbsp;
        <span className="fa fa-arrow-down">{props.downvote}</span>
        <hr></hr>
    </div>
)

}

export default Joke