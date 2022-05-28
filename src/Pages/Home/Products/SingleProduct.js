import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
	const { _id, name, supplierName, imgUrl, description, price, quantity } =
		product;

	return (
		<div className='col-md-4 col-sm-12'>
			<div className='card'>
				<img src={imgUrl} className='card-img-top' alt='' />
				<div className='card-body'>
					<div className='d-flex justify-content-between mb-3'>
						<h5 className='card-title'>Name:{name}</h5>
						<h5 className='card-title'>{supplierName}</h5>
					</div>
					<div className='d-flex justify-content-between mb-3'>
						<h5 className='card-subtitle'>Price: {price}</h5>
						<h5 className='card-subtitle'>Quantity: {quantity}</h5>
					</div>
					<p className='card-text'>{description}</p>
					<div className='d-flex justify-content-between'>
						<Link to={`/products/${_id}`} className='btn btn-secondary d-block'>
							Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
