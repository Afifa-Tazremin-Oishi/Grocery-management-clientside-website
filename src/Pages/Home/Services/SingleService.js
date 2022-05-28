const SingleService = ({ icon }) => {
	return (
		<div className='col-sm-12 col-md-6 d-flex flex-sm-row flex-md-column align-items-center mt-5 p-3 '>
			<div>
				<h3 className='text-uppercase text-center' style={{color:'magenta'}}>
					Our Locations
				</h3>
				<ul style={{color:'blue'}}>
					<li>Dhaka</li>
					<li>Sylhet</li>
					<li>Chittagong</li>
					<li>Khulna</li>
					<li>Barishal</li>
					<li>Rajshahi</li>
				</ul>
			</div>
		</div>
	);
};

export default SingleService;
