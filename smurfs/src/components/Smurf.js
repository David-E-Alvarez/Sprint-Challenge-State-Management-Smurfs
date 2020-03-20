import React from 'react';

const Smurf = (props) => {
    console.log("props", props.name)
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Smurf;