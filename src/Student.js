import React from "react";
import './index.css';

const Student = props => {
    return(
        <div>
            <h1>Hello,{props.name}</h1>
            <h2>It's {props.Time}</h2>
        </div>
    );
};

export default Student;