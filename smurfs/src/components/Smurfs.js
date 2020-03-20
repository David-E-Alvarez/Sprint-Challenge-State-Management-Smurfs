import React,{ useContext } from 'react';
import {smurfContext} from "../contexts/smurfContext";
import Smurf from "./Smurf";

const Smurfs = () => {
    const {smurfData} = useContext(smurfContext);
    console.log("smurfData", smurfData);
    return(
        <div>
            {smurfData.map(smurf =>{
               return <Smurf name={smurf.name}/> 
            })}
        </div>
    );
}

export default Smurfs;