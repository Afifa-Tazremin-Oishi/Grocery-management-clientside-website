import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Share/Loader";
import SingleProduct from "./SingleProduct";

const Products = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	// console.log(products);

	useEffect(() => {
		axios
			.get(`https://sleepy-dusk-14120.herokuapp.com/products/limits`)
			.then((response) => {
				setLoading(false);
				setProducts(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='container my-5'>
			<div className='row '>
				<h1 className='text-center text-secondary mb-5'>Our Products</h1>

				{loading ? (
					<Loader />
				) : (
					<>
						{products.map((product) => (
							<SingleProduct key={product._id} product={product} />
						))}
					</>
				)}
			</div>
			<div className='d-flex justify-content-center'>
				<Link
					to='/products'
					className='btn btn-outline-secondary btn-lg mx-auto my-5'
				>
					View All Products
				</Link>
			</div>
		</div>
	);
};

export default Products;
