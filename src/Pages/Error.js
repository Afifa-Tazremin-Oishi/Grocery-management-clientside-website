import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className='container my-5'>
			<div className='row  text-center'>
				<h1 className='display-1  text-bold'>Oops!</h1>
				<h3 className='display-4'>404 - PAGE NOT FOUND</h3>

				<Link
					style={{ color: "#bbb" }}
					to='/'
					className='text-decoration-none btn btn-link btn-outline-secondary  my-5 p-3 fs-3 w-50 mx-auto'
				>
					GO TO HOMEPAGE
				</Link>
			</div>
		</div>
	);
};

export default Error;
