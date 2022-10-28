import { useEffect } from "react";
import { createContext, useState } from "react";

const DataContext = createContext();

async function fetchData(ip) {
	const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`);
	const data = await response.json();
	return data;
}

export function DataProvider({ children }) {
	const [ipAddress, setIpAddress] = useState("");
	const [data, setData] = useState({});
	const [error, setError] = useState("");

	const value = {
		ipAddress,
		setIpAddress,
		data,
		setData,
		error,
	};

	useEffect(() => {
		fetchData(ipAddress)
			.then((data) => {
				setData(data);
			})
			.catch(() => {
				setError(`Something is blocking your access. Try disabling your ad-blocker or VPN.`);
			});
	}, [ipAddress]);

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContext;
