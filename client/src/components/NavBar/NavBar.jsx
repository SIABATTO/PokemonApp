import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../Search/SearchBar";

const NavBar = () => {
  return(
    <div className={style.mainContainer}>
      <Link to = "/">LANDING</Link>
      <Link to = "/home">HOME</Link>
      <Link to = "/create">CREATE A POKEMON HERE</Link>
      <SearchBar />
    </div>
  )
}

export default NavBar;