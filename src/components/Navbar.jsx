import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/desafio_useContext"> Home </Link> | <Link to="/desafio_useContext/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
