const SingleService1 = ({ icon }) => {
	return (
		<div className='col-sm-12 col-md-6 d-flex flex-sm-row flex-md-column align-items-center mt-5 p-3 '>
			<div className='fs-1 me-4 text-danger'>{icon}</div>
			<div>
				<h3 className='text-uppercase text-center text-info'>
				Trade Easily and Safely
				</h3>
				<p className='text-muted'>
                We are designed to facilitate registered members to place, accept, conclude, manage and fulfill orders for the provision of products and services online.
				</p>
			</div>
		</div>
	);
};

export default SingleService1;