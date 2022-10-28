import { useContext } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Map from "./components/Map/Map";

import DataContext from "./context/DataContext";

import "./media.scss";

function App() {
	const { data } = useContext(DataContext);
	return (
		<div className="App">
			{!Object.keys(data).length ? (
				<Loading />
			) : (
				<>
					<Header />
					<Map />
				</>
			)}
		</div>
	);
}

export default App;
