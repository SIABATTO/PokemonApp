import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getPokemon, getTypes } from "../../redux/actions";
import { useState } from "react";
import Paging from "../../components/Paging/Paging";
import FilterBar from "../../components/FilterBar/FilterBar";


const Home = () => {
  
  const pokemon = useSelector((state) => state.pokemon)

  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage] = useState(12);
  const indexLastPoke = currentPage * pokePerPage;
  const indexFirstPoke = indexLastPoke - pokePerPage;
  const currentPoke = pokemon.slice(indexFirstPoke, indexLastPoke);

  const paging = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon()); //hace dispath y se ejecuta el action creator
    dispatch(getTypes());
  },[dispatch]) //array de dependecncias

  return(
    <>
      <h1>This is the Home page</h1>
      <FilterBar></FilterBar>
      <CardsContainer currentPoke={currentPoke} />
      <Paging 
        pokePerPage={pokePerPage}
        pokemon={pokemon.length}
        paging={paging}/>
    </>
  )
}

export default Home;