import axios from "axios";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/social/google.png";
import Loader from "../Share/Loader";

const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);

	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (googleUser) {
		const email = googleUser.user.email;
		console.log("Google User Email: ", email);

		// JWT
		axios
			.post(`https://sleepy-dusk-14120.herokuapp.com/login`, {
				email,
			})
			.then(({ data }) => {
				// console.log("JWT Data: ", data);

				localStorage.setItem("jwt", data.accessToken);
			})
			.catch((error) => console.log(error));

		return <Navigate to={from} replace={true} />;
	}

	let errorElement;
	if (googleError) {
		errorElement = <p className='text-danger'>Error: {googleError?.message}</p>;
	}

	if (googleLoading) {
		return <Loader />;
	}

	return (
		<div className='w-50 mx-auto my-3'>
			<div className='d-flex'>
				<div
					style={{ height: "1px", width: "40%" }}
					className='bg-secondary mt-3 mx-3'
				></div>
				<p className='fs-5'>OR</p>
				<div
					style={{ height: "1px", width: "40%" }}
					className='bg-secondary mt-3 mx-3'
				></div>
			</div>
			<div
				onClick={() => signInWithGoogle()}
				className='d-flex justify-content-center'
			>
				<button className='btn btn-light d-block border border-secondary'>
					<img src={google} alt='Googel' height='30px' />
					<span className='px-2'>Continue with Google</span>
				</button>
			</div>
			{errorElement}
		</div>
	);
};

export default SocialLogin;
