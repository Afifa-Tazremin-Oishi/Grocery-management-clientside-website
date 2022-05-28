import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Share/Loader";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [isRefresh, setIsRefresh] = useState(false);
	const [addQty, setAddQty] = useState(0);
	const { id } = useParams();

	const { _id, name, imgUrl, description, price, quantity, sold } = product;

	useEffect(() => {
		axios
			.get(`https://sleepy-dusk-14120.herokuapp.com/products/${id}`)
			.then((response) => {
				setLoading(false);
				setProduct(response.data);
			})
			.catch((error) => console.log(error));
	}, [id, isRefresh]);

	const handleDeliver = () => {
		axios
			.patch(`https://sleepy-dusk-14120.herokuapp.com/products/${id}`)
			.then((response) => setIsRefresh(!isRefresh))
			.catch((error) => console.log(error));
	};

	const handleQtyUpdate = (e) => {
		e.preventDefault();
		console.log({ addQty: parseInt(addQty) });

		if (parseInt(addQty) !== 0) {
			axios
				.patch(
					`https://sleepy-dusk-14120.herokuapp.com/products/${id}/qty`,
					{
						addQty: parseInt(addQty),
					}
				)
				.then((response) => {
					setIsRefresh(!isRefresh);
					setAddQty(0);
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className='container my-5'>
			<div className='row justify-content-center'>
				<h1 className='text-center text-secondary'>Product Details</h1>
				{loading ? (
					<Loader />
				) : (
					<div className='col-md-8 col-sm-12'>
						<div className='card'>
							<img src={imgUrl} className='card-img-top' alt='' />
							<div className='card-body'>
								<div className='d-flex justify-content-between mb-3'>
									<h5 className='card-title text-center'>PID: {_id}</h5>
									<h5 className='card-title text-center '>{name}</h5>
								</div>
								<p className='card-text'>{description}</p>
								<div className='d-flex justify-content-between mb-2'>
									<h5 className='card-subtitle'>Price: {price}</h5>
									<h5 className='card-subtitle'>Qty: {quantity}</h5>
									<h5 className='card-subtitle'>Sold: {sold}</h5>
								</div>
								<div className='d-flex justify-content-between  mb-2 mt-4'>
									<button
										onClick={handleDeliver}
										className='btn btn-outline-secondary text-decoration-none '
									>
										Delivered
									</button>
									<form onSubmit={handleQtyUpdate} className=''>
										<input
											type='text'
											name='addQty'
											id='addQty'
											className='p-1 '
											value={addQty}
											onChange={(e) => setAddQty(e.target.value)}
										/>
										<button className='btn btn-outline-secondary ms-1 mb-1 p-1'>
											Add QTY
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
