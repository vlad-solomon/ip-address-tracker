import { useContext } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import DataContext from "../../context/DataContext";
import "./Map.scss";

import MarkerIcon from "./MarkerIcon.svg";

function Map() {
	const { data } = useContext(DataContext);

	function ChangeView({ center, zoom }) {
		const map = useMap();
		map.setView(center, zoom);
		return null;
	}

	function Icon(iconSize) {
		return L.icon({
			iconUrl: MarkerIcon,
			iconSize,
			iconAnchor: [15, 38],
			className: "map__marker",
		});
	}

	const position = [data.location.lat, data.location.lng];

	return (
		<div className="map">
			<MapContainer center={position} minZoom={5} scrollWheelZoom zoomControl={false} doubleClickZoom={false} boxZoom={false} style={{ height: "100%", width: "100%" }}>
				<ChangeView center={position} zoom={8} />
				<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={position} icon={Icon([30, 38])} />
			</MapContainer>
		</div>
	);
}

export default Map;
