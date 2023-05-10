import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import data from "../../data.json";
import { useState } from "react";

function ProductsPage() {
	const [dataSt, setDataSt] = useState(data);
	const applySearch = (nameSearch) => {
		const newData = data.filter((ele) => {
			return ele.name.toLowerCase().includes(nameSearch.toLowerCase());
		});
		setDataSt(newData);
	};
	const checkStock = (isChecked) => {
		if (isChecked) {
			const newData = data.filter((ele) => ele.inStock);
			setDataSt(newData);
		} else setDataSt(data);
	};
	return (
		<div>
			<SearchBar applySearch={applySearch} checkStock={checkStock} />
			<ProductTable data={dataSt} />
		</div>
	);
}

export default ProductsPage;
