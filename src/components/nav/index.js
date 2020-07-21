import React from "react";
import menuItems from "./menuItems";
import { useTranslation } from 'react-i18next';

const Nav = () => {
	const items =  menuItems(useTranslation);
	return (
		<nav className="navigation">
			<ul>{items && items.map((item, index) => <li key={index} tabIndex={index}><a href={`#${item}`}>{item}</a></li>)}</ul>
		</nav>
	);
};

export default Nav;
