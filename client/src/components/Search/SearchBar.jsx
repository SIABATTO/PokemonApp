import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokeName } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) { alert("You must enter a name") }
    else {
      dispatch(getPokeName(name));
      setName("");
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={style.SearchBar}>
        <input 
          type="text" 
          id="search" 
          value={name}
          placeholder="Search Pokemon..."
          autoComplete='off'
          onChange={(e) => handleInputChange(e)}/>
          <button type='submit' >Search
          </button>
      </div>
    </form>
  )
}