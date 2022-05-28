import { FaCar, FaCaravan } from "react-icons/fa";
import SingleService from "./SingleService";
import SingleService1 from "./SingleService1";

const Services = () => {
	return (
		<div className='container my-5'>
			<div className='row'>
				<SingleService icon={<FaCar />} />
				<SingleService1 icon={<FaCaravan />} />
			</div>
		</div>
	);
};

export default Services;
