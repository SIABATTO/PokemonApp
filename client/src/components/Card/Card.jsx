import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, image, types, id } = props;
  
  return (
    <div className={style.card}>
      <img src={image} width="150" height="150" alt={name} />
      <h2>{name}</h2>      
      <div>
        {types && types.map((e, index) => (
          <div key={index}>
            <span>{e.name}</span>
          </div>
        ))}
      </div>
      <Link to={`/detail/${id}`}>
      <button>Detail</button>
      </Link>
    </div>
  );
};

export default Card
