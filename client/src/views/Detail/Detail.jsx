import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
// import "./Detail/Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const pokemonDetails = useSelector((state) => state.detail);

  return (
    <div className="">
      { 
        pokemonDetails?.map((poke) => {
          return (
            <div>
              <Link to="/home">
                <button>Go Back</button>
              </Link>
              <div>
                <img src={poke.image} alt="not found" />
              </div>
              <div>
                <h2>{poke.name}</h2>
              </div>
              <div>
                <h3>Health Points: {poke.hp}</h3>
              </div>
              <div>
                <h4>Attack: {poke.attack}</h4>
              </div>
              <div>
                <h4>Defense: {poke.defense}</h4>
              </div>
              <div>
                <h4>Speed: {poke.speed}</h4>
              </div>
              <div>
                <h4>Height: {poke.height}</h4>
              </div>
              <div>
                <h4>Weight: {poke.weight}</h4>
              </div>
              <div>
                <h4>
                  Types:
                  {poke.types ? poke.types.map((type) => (
                    <h4>{type.name}</h4>
                  )) : poke.type.map(type => (
                    <h4>{type.name}</h4>
                  ))}
                </h4>
              </div>
            </div>
          );
        })}
    </div>
  );
}

