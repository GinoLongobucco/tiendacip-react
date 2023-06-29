import "./Navbar.css";
import CartWidget from "../common/cartWidget/CartWidget";

const Navbar = () => {
	return (
		<div className="navContainer">
			<h4> Tienda Cip</h4>
			<ul className="containerCategories">
				<li>inicio</li>
				<li>productos</li>
				<li>contacto</li>
			</ul>
			<CartWidget />
		</div>
	);
};

export default Navbar;
