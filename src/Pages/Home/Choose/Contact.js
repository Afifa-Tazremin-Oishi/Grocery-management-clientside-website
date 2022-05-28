import React from "react";

export const Contact = () => {
	return (
		<div>
			<h4 className="fw-bold ">Contact Us</h4>

			<form>
				<div className='form-floating mb-3'>
					<input
						type='text'
						className='form-control'
						name='name'
						id='name'
						placeholder='Your Name'
						required
					/>
					<label htmlFor='imgURL' className='form-label'>
						Your Name
					</label>
				</div>

				<div className='form-floating mb-3'>
					<textarea
						name='description'
						id='description'
						className='form-control'
						placeholder='Please give a breif description of your requirement'
						style={{ height: "100px" }}
					></textarea>
					<label htmlFor='description'>
						Please give a  description of your requirements.
					</label>
				</div>

				<div className='row mb-3'>
					<div className='form-floating col'>
						<input
							type='phone'
							className='form-control'
							name='phone '
							id='phone'
							placeholder='Enter Your Phone Number'
							required
						/>
						<label htmlFor='phone' className='ms-2'>
							Phone Number
						</label>
					</div>
					<div className='form-floating col'>
						<input
							type='email'
							className='form-control'
							name='email'
							id='email'
							placeholder='Enter Your E-Mail'
							required
						/>
						<label htmlFor='quantity' className='ms-2'>
							Email Address
						</label>
					</div>
				</div>

				<button type='submit' className='btn btn-secondary'>
					Send Us
				</button>
			</form>
		</div>
	);
};
