import Banner from "./Banner/Banner";
import Choose from "./Choose/Choose";
import Products from "./Products/Products";
import Services from "./Services/Services";

const Home = () => {
	return (
		<div>
			<Banner />
			<Products />
			<Services />
			<Choose />
		</div>
	);
};

export default Home;
