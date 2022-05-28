export const GlobalFilter = ({ filter, setFilter }) => {
	return (
		<div className='container my-3'>
			<div className='row justify-content-center'>
				<div className='col-md-6 col-sm-12 form-floating '>
					<input
						type='text'
						className='form-control'
						value={filter || ""}
						onChange={(e) => setFilter(e.target.value)}
					/>
					<label htmlFor='name' className='form-label ms-2'>
						Search Product
					</label>
				</div>
			</div>
		</div>
	);
};
