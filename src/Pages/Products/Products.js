import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Share/Loader";
import SingleProduct from "./SingleProduct";

const Products = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	// console.log(products);

	useEffect(() => {
		axios
			.get(`https://sleepy-dusk-14120.herokuapp.com/products`)
			.then((response) => {
				setLoading(false);
				setProducts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleDelete = (_id) => {
		const confirmation = window.confirm("Are you sure sure?");
		if (confirmation) {
			axios
				.delete(
					`https://sleepy-dusk-14120.herokuapp.com/products/${_id}`
				)
				.then((response) => {
					toast.warning("Delete Successfully", {
						id: "Porduct Delete",
						theme: "colored",
					});

					const restOfProducts = products.filter(
						(product) => product._id !== _id
					);
					setProducts(restOfProducts);
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className='container my-5'>
			<div className='row '>
				<h1 className='text-center'>All Products</h1>

				{loading ? (
					<Loader />
				) : (
					<>
						{products.map((product) => (
							<SingleProduct
								key={product._id}
								product={product}
								handleDelete={handleDelete}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Products;
