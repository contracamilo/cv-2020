import React from "react";
import menuItems from "./menuItems";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Nav = () => {
	const items =  menuItems(useTranslation);
	return (
		<nav className="navigation">
			<ul>
				{items && items.map((item, index) => <li key={index} tabIndex={index}><a href={`#${item}`}>{item}</a></li>)}
				<li><Link to="/portfolio">Portfolio</Link></li>
			</ul>
		</nav>
	);
};

export default Nav;
