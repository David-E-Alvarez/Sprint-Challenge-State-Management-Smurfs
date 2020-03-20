import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {smurfContext} from '../contexts/smurfContext';
import Smurfs from "./Smurfs";

function App(){
    const [smurfData, setSmurfData] = useState([]);
    useEffect(() => {
      axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("res.data", res.data)
        setSmurfData(res.data);
      })
    },[])
    const addNewSmurf = smurf => {
      const newSmurf = {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      };
    }
    const addName = name => {
      console.log("name", name.target.value)
      setSmurfData([...smurfData, name.target.value])
      // add the given item to the cart
    };

      // const submitForm = e => {
      //   e.preventDefault();
      //   addNewSmurf(teamMember);
      //   setSmurfData({ name: "", age: "",height: "" });
      // };
    return (
      <div className="App">
        <h1>The Smurfs</h1>
            <form>
                <label htmlFor="name">Smurf name: </label>
                <input id="name" type="text" placeholder="add smurf" name="name" onChange={addName}/><br/>
                <label htmlFor="age">Age: </label>
                <input id="age" type="text" placeholder="add age" name="email"/><br/>
                <label htmlFor="height">Height: </label>
                <input id="height" type="text" placeholder="add height" name="role"/><br/>
                <button type="submit">Add Smurf</button>
            </form>
        <smurfContext.Provider value={{smurfData}}>
            <Smurfs/>
        </smurfContext.Provider>
      </div>
    );
}

export default App;