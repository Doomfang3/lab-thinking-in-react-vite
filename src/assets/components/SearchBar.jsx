import { useState } from "react";

function SearchBar({ applySearch, checkStock }) {
	const [searchSt, setSearchSt] = useState("");
	const [isCheckedSt, setIsCheckedSt] = useState(false);

	return (
		<>
			<label>
				Search
				<input
					type="text"
					placeholder="Search..."
					value={searchSt}
					onChange={(e) => {
						setSearchSt(e.target.value);
						applySearch(e.target.value);
					}}
				></input>
			</label>

			<label>
				Only show products in stock
				<input
					type="checkbox"
					checked={isCheckedSt}
					onChange={(e) => {
						setIsCheckedSt(e.target.checked);
						checkStock(e.target.checked);
					}}
				></input>
			</label>
		</>
	);
}

export default SearchBar;
