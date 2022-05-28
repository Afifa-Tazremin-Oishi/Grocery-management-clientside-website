import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg"
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import BannerStyle from "./Banner.module.css";

const Banner = () => {
	return (
		<Carousel fade={true} indicators={false}>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner1}
					alt='First slide'
				/>
				<Carousel.Caption>
					
					<h3 className='display-5 fw-bold'>Where R World Meets Yours</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner2}
					alt='Second slide'
				/>

				<Carousel.Caption>
					
					<h3 className='display-5 fw-bold'>Get There,Start Here</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner3}
					alt='Third slide'
				/>

				<Carousel.Caption>
					
					<h3 className='display-5 fw-bold'>Get Out And Ride</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
