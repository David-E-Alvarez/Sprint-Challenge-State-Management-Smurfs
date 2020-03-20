import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {smurfContext} from '../contexts/smurfContext';
import Smurfs from "./Smurfs";

function App(){
    const [smurfData, setSmurfData] = useState([]);
    const [smurf, setSmurf] = useState({
      name: "", 
      age: null,
      height: null
    })

    const getSmurfs = () => {
      axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("res.data", res.data)
        setSmurfData(res.data);
      })
    }
    useEffect(getSmurfs,[])
      const submitForm = e => {
        e.preventDefault();
        axios
          .post("http://localhost:3333/smurfs", smurf)
          .then(res => {
            console.log("res.data", res.data)
            getSmurfs()
          })
          .catch(err =>{
            console.log("err", err)
          })
          setSmurf({
            name: "", 
            age: null,
            height: null
          })
      };

      const handleChange = e => {
        setSmurf({ 
            ...smurf, [e.target.name]: e.target.value
        });
       
        console.log("e.target.value in handleNameChange: ", e.target.value);
      };

    return (
      <div className="App">
        <h1>The Smurfs</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Smurf name: </label>
                <input id="name" type="text" placeholder="add smurf" name="name" onChange={handleChange}/><br/>
                <label htmlFor="age">Age: </label>
                <input id="age" type="text" placeholder="add age" name="age" onChange={handleChange}/><br/>
                <label htmlFor="height">Height: </label>
                <input id="height" type="text" placeholder="add height" name="height" onChange={handleChange}/><br/>
                <button type="submit">Add Smurf</button>
            </form>
        <smurfContext.Provider value={{smurfData}}>
            <Smurfs/>
        </smurfContext.Provider>
      </div>
    );
}

export default App;