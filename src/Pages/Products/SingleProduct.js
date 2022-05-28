import { Link } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = ({ product, handleDelete }) => {
	const { _id, name, supplierName, imgUrl, description, price, quantity } =
		product;

	return (
		<div className='col-md-4 col-sm-12'>
			<div className='card'>
				<img
					src={imgUrl}
					className='card-img-top img-res'
					alt=''
					width='200'
					height='200'
				/>
				<div className='card-body'>
					<div className='d-flex justify-content-between mb-3'>
						<h5 className='card-title'>{name}</h5>
						<h5 className='card-title'>{supplierName}</h5>
					</div>
					<div className='d-flex justify-content-between mb-3'>
						<h5 className='card-subtitle'>Price: {price}</h5>
						<h5 className='card-subtitle'>Qty: {quantity}</h5>
					</div>
					<p className='card-text'>{description}</p>
					<div className='d-flex justify-content-between'>
						<Link to={`/products/${_id}`} className='btn btn-secondary d-block'>
							Details
						</Link>
						<button
							onClick={() => handleDelete(_id)}
							className='btn btn-outline-secondary text-decoration-none'
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
