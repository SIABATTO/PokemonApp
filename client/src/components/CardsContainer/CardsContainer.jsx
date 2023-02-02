import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = ( {currentPoke} ) => {
  
  // const pokemon = useSelector(state=>state.pokemon)
  // console.log(pokemon)
  return(
    <div className={style.container}>
        {currentPoke.map(p => {
          return <Card 
            key= {p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            types={p.types}
          />
        })}
    </div>
  )
}

export default CardsContainer