import { useState, useContext, useRef } from "react";
import { isIPv4 } from "is-ip";
import "./Search.scss";
import Arrow from "./Arrow.svg";

import DataContext from "../../context/DataContext";

function Search() {
	const { ipAddress, setIpAddress } = useContext(DataContext);
	const [isValid, setIsValid] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const inputRef = useRef();

	return (
		<div className="search">
			<input
				ref={inputRef}
				type="text"
				placeholder="Search for any IP address or domain"
				maxLength={15}
				onChange={(e) => {
					const value = e.target.value;
					setInputValue(value);
					setIsValid(isIPv4(value));
				}}
			/>
			{isValid && ipAddress !== inputValue && (
				<div
					className="search__button"
					onClick={() => {
						setIpAddress(inputRef.current.value);
					}}
				>
					<img src={Arrow} alt="search" />
				</div>
			)}
		</div>
	);
}

export default Search;
