import React from "react";
import { Link } from "react-router-dom";
import "./Note.css"

function Note(props){

    return(
        <div className="note">

            <h3> {props.topic}  </h3>   <br/>
            <p> {props.paragraph} </p>  <br/>
           <div className="btn-note" >
            <Link to={props.location}> <button> {props.pageName} </button> </Link>
            </div>

        </div>
    )
}

export default Note;