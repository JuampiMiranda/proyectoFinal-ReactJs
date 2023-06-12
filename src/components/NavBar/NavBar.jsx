import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import imgGima from "../../assets/logo.png";

const NavBar = () => {

  return (
    <header>
        <Link to={"/"}>
          <img className="imgGima" src={imgGima} alt="Logo Gima" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="category" activeClassName="active" to={"/categoria/2"}> Fisioterapia </NavLink>
                </li>

                <li>
                  <NavLink className="category" activeClassName="active" to={"/categoria/3"}> Kinesiología </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar