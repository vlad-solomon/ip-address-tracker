import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./Loading.scss";

import DataContext from "../../context/DataContext";

function Loading() {
	const { error } = useContext(DataContext);
	return <div className="loading">{!error ? <RotatingLines strokeColor="#4B4EAE" strokeWidth="2" animationDuration="0.75" width="96" visible /> : <span>{error}</span>}</div>;
}

export default Loading;
