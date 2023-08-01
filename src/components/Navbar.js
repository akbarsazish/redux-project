import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
    return (
      <nav className="navbar">
        <div className="logo"> <h1> Redux practice  </h1> </div>
        <div className="nav-container"> <h2>{amount} </h2> </div>
      </nav>
    );
}

export default Navbar;
