import React from "react";

const Loader = () => {
	return (
		<div className='d-flex w-100 min-vh-50 my-5 justify-content-center align-items-center'>
			<div>
				<strong className='text-danger mx-5 pb-3'>
					Please wait for a moment...
				</strong>
				<div
					className='spinner-border text-danger d-block my-3 mx-auto'
					role='status'
				>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</div>
	);
};

export default Loader;
