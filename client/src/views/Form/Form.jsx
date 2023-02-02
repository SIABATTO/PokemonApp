import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postPokemon } from "../../redux/actions";

const Form = () => {
  const Types = useSelector((state) => state.types);

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "1",
    attack: "1",
    defense: "1",
    speed: "1",
    height: "1",
    weight: "1",
    type: [],
  });
  // console.log(form)

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: [],
  });

  //////      VALIDATE   /////

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    const errors = {};

    if (/^[a-z ,.'-]+$/i.test(form.name)) {
      setErrors({ ...errors, name: "" });
    } else {
      setErrors({ ...errors, name: "Don't use numbers" });
    }
    if (form.name === "")
      setErrors({ ...errors, name: "The pokemon must have a name" });
  };

  const handleSelector = (e) => {
    if (!e.target.value) {
      return;
    }
    if (form.type.length === 2) {
      alert("Your pokemon can have a max of two types");
      return;
    }
    setForm({
      ...form,
      type: [...form.type, e.target.value],
    });
  };

  const handleDelete = (e) => {
    setForm({
      ...form,
      type: form.type.filter((el) => el !== e),
    });
  };

  console.log(form);

  const submitHandle = (e) => {
    e.preventDefault();    
      dispatch(postPokemon(form));
      alert('Pokemon created')
      setForm({
        name: "",
        image: "",
        hp: "1",
        attack: "1",
        defense: "1",
        speed: "1",
        height: "1",
        weight: "1",
        type: [],
      });   
  };

  return (
    <form onSubmit={submitHandle}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Image: </label>
        <input
          type="text"
          value={form.image}
          onChange={changeHandler}
          name="image"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label>Health Points: </label>
        <input
          type="range"
          value={form.hp}
          onChange={changeHandler}
          name="hp"
          min="1"
          max="999"
          step="1"
        />
        <div>{form.hp}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label>Attack: </label>
        <input
          type="range"
          value={form.attack}
          onChange={changeHandler}
          name="attack"
          min="1"
          max="999"
          step="1"
        />
        <div>{form.attack}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label>Defense: </label>
        <input
          type="range"
          value={form.defense}
          onChange={changeHandler}
          name="defense"
          min="1"
          max="999"
          step="1"
        />
        <div>{form.defense}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label>Speed: </label>
        <input
          type="range"
          value={form.speed}
          onChange={changeHandler}
          name="speed"
          min="1"
          max="999"
          step="1"
        />
        <div>{form.speed}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label>Height: </label>
        <input
          type="range"
          value={form.height}
          onChange={changeHandler}
          name="height"
          min="1"
          max="999"
          step="1"
        />
        <div>{form.height}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <label>Weight: </label>
        <input
          type="range"
          value={form.weight}
          onChange={changeHandler}
          name="weight"
          min="1"
          max="999"
          step="1"
        />
        <div>{form.weight}</div>
      </div>

      <div>
        <select onChange={(e) => handleSelector(e)}>
          <option value="selected">Types</option>
          {Types &&
            Types.map((typ) => (
              <option value={typ.name} key={typ.name}>
                {typ.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        {form.type.map((el) => {
          return (
            <ul>
              <li>
                <p>{el}</p>
                <p onClick={() => handleDelete(el)}>x</p>
              </li>
            </ul>
          );
        })}
      </div>

      <button type="submit">SUBMIT</button>

      <Link to="/home">
        <button>Go Back</button>
      </Link>
    </form>
  );
};

export default Form;
