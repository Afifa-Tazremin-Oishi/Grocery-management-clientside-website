import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
	const user = useAuthState(auth);
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [supplierName, setSupplierName] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [sold, setSold] = useState(0);
	const [email, setEmail] = useState(user[0].email);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(
			name,
			supplierName,
			imgUrl,
			description,
			price,
			quantity,
			email,
			sold
		);
		const product = {
			name,
			supplierName,
			imgUrl,
			description,
			price,
			quantity: parseInt(quantity),
			email,
			sold: parseInt(sold),
		};

		axios
			.post("https://sleepy-dusk-14120.herokuapp.com/products", {
				...product,
			})
			.then((response) => {
				navigate("/products");
				toast.success("Add Product Successfully", {
					id: "add_product",
					theme: "colored",
				});
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className='container my-5 border broder-secondary'>
			<div className='row justify-content-center'>
				<div className='col-sm-12 col-md-6'>
					<h1 className='text-center text-secondary my-3'>Add Product</h1>
					<form onSubmit={handleSubmit}>
						<div className='row mb-3'>
							<div className='form-floating col'>
								<input
									type='text'
									className='form-control'
									name='name'
									id='name'
									placeholder='Enter Product Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								<label htmlFor='name' className='form-label'>
									Product Name
								</label>
							</div>
							<div className='form-floating col'>
								<input
									type='text'
									className='form-control'
									name='supplierName'
									id='supplierName'
									placeholder='Enter Supplier Name'
									value={supplierName}
									onChange={(e) => setSupplierName(e.target.value)}
									required
								/>
								<label htmlFor='name' className='form-label'>
									Supplier Name
								</label>
							</div>
						</div>
						<div className='form-floating mb-3'>
							<input
								type='text'
								className='form-control'
								name='imgURL'
								id='imgURL'
								placeholder='Enter Product Image URL'
								value={imgUrl}
								onChange={(e) => setImgUrl(e.target.value)}
								required
							/>
							<label htmlFor='imgURL' className='form-label'>
								Image URL
							</label>
						</div>

						<div className='form-floating mb-3'>
							<textarea
								name='description'
								id='description'
								className='form-control'
								placeholder='Please give a short description about product'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								style={{ height: "100px" }}
							></textarea>
							<label htmlFor='description'>Short Description</label>
						</div>

						<div className='row mb-3'>
							<div className='form-floating col'>
								<input
									type='number'
									className='form-control'
									name='price'
									id='price'
									placeholder='Enter Price'
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									required
								/>
								<label htmlFor='price'>Price</label>
							</div>
							<div className='form-floating col'>
								<input
									type='number'
									className='form-control'
									name='quantity'
									id='quantity'
									placeholder='Enter Quantity'
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}
									required
								/>
								<label htmlFor='quantity'>Quantity</label>
							</div>
							<div className='form-floating col'>
								<input
									type='number'
									className='form-control'
									name='sold'
									id='sold'
									placeholder='Sold'
									value={sold}
									onChange={(e) => setSold(e.target.value)}
									required
								/>
								<label htmlFor='quantity'>Sold</label>
							</div>
						</div>

						<div className='form-floating mb-3'>
							<input
								type='email'
								className='form-control'
								name='email'
								id='email'
								placeholder='User Email Address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								readOnly
							/>
							<label htmlFor='imgURL' className='form-label'>
								Email Address
							</label>
						</div>
						<button type='submit' className='btn btn-secondary'>
							Add Product
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
