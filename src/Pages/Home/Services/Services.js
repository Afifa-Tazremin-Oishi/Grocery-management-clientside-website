import { FaCar, FaCaravan } from "react-icons/fa";
import SingleService from "./SingleService";
import SingleService1 from "./SingleService1";

const Services = () => {
	return (
		<div className='container my-5'>
			<div className='row'>
				<h2 className='text-muted text-center text-uppercase'>Our Services</h2>
				<SingleService icon={<FaCar />} />
				<SingleService1 icon={<FaCaravan />} />
			</div>
		</div>
	);
};

export default Services;
