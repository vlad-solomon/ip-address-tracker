import { useContext } from "react";
import "./Details.scss";

import DataContext from "../../context/DataContext";

function Details() {
	const { data } = useContext(DataContext);

	function normalize(str) {
		return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
	}

	return (
		<div className="details">
			<div className="details__block">
				<span className="category">ip address</span>
				<span className="category__result">{data.ip}</span>
			</div>
			<div className="details__block">
				<span className="category">location</span>
				<span className="category__result">
					{data.location.city ? normalize(data.location.city) : normalize(data.location.region)}
					{data.location.postalCode ? `,${data.location.postalCode}` : ""}
				</span>
			</div>
			<div className="details__block">
				<span className="category">timezone</span>
				<span className="category__result">{data.location.timezone}</span>
			</div>
			<div className="details__block">
				<span className="category">isp</span>
				<span className="category__result">{data.isp}</span>
			</div>
		</div>
	);
}

export default Details;
