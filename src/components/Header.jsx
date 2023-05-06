import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo SportSee" />
      <nav>
        <ul>
          <li className="title">SportSee</li>
          <NavLink to={"/"}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to={"/profil"}>
            <li>Profils</li>
          </NavLink>
          <NavLink to={"/settings"}>
            <li>Réglages</li>
          </NavLink>
          <NavLink to={"/community"}>
            <li>Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
