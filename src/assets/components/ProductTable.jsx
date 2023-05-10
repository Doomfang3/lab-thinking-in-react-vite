import ProductRow from "./ProductRow";

function ProductTable({ data }) {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{data.map((ele) => {
						return (
							<tr key={ele.id}>
								<ProductRow product={ele} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default ProductTable;
