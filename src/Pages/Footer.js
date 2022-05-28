import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-primary text-white py-5 mt-4'>
			<div className='container'>
				<div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
					<Link to='/' className='text-decoration-none text-white'>
						<h2 style={{color:'greenyellow'}}> <strong>Grab Grocers</strong></h2>
					</Link>
					<p className='mb-1 my-3 my-md-0'>
						&copy;Afifa Oishi {new Date().getFullYear()} | All Right Reserved{" "}
					</p>
					<p className='mb-1 my-3 my-md-0'>
						<span className='mx-3'>
							<FaGithub />
						</span>
						<span className='mx-3'>
							<FaTwitter />
						</span>
						<span className='mx-3'>
							<FaFacebook />
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
