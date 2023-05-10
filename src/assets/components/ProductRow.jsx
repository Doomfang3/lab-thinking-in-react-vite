function ProductRow({ product }) {
	const { name, price, inStock } = product;
	return (
		<>
			<td style={inStock ? {} : { color: "red" }}>{name}</td>
			<td>{price}</td>
		</>
	);
}

export default ProductRow;
