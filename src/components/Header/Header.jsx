import "./Header.scss";

import Search from "../Search/Search";
import Details from "../Details/Details";

function Header() {
	return (
		<div className="header">
			<h1>IP Address Tracker</h1>
			<Search />
			<Details />
		</div>
	);
}

export default Header;
