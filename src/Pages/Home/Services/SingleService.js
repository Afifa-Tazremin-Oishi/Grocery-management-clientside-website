const SingleService = ({ icon }) => {
	return (
		<div className='col-sm-12 col-md-6 d-flex flex-sm-row flex-md-column align-items-center mt-5 p-3 '>
			<div className='fs-1 me-4 text-danger'>{icon}</div>
			<div>
				<h3 className='text-uppercase text-center text-info'>
					Trustworthy Indian Suppliers
				</h3>
				<p className='text-muted'>
					In order to reduce trade risks for global buyers, all premium suppliers on Made-in-China.com are verified on-site by SGS, Bureau Veritas or TÜV Rheinland, world's leading inspection companies. Global buyers can access to suppliers’ Audit Reports online for free to check their authentic information.
				</p>
			</div>
		</div>
	);
};

export default SingleService;
