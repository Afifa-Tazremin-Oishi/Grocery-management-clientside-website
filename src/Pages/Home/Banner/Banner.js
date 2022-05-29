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
				    <p className='display-6' style={{color:'magenta'}}>Fresh and Organic</p>
					<h3 className='display-5 fw-bold' style={{color:'greenyellow'}}>Your Daily Need Products</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner2}
					alt='Second slide'
				/>

				<Carousel.Caption>
					<p className='display-6' style={{color:'magenta'}}>Fresh and Organic</p>
					<h3 className='display-5 fw-bold' style={{color:'greenyellow'}}>Your Daily Need Products</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner3}
					alt='Third slide'
				/>

				<Carousel.Caption>
					
					<h3 className='display-5 fw-bold' style={{color:'orange'}}>Order Now!!!</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
