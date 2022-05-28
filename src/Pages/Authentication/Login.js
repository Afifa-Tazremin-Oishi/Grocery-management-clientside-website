import axios from "axios";
import { useState } from "react";
import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loader from "../Share/Loader";
import SocialLogin from "./SocialLogin";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formError, setFormError] = useState({
		lengthError: "",
		passwordResetError: "",
	});

	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

	if (user) {
		console.log("Login User: ", user.user);
		return <Navigate to={from} replace={true} />;
	}

	if (loading) {
		return <Loader />;
	}

	const handleSubmit = (e) => {
		console.log("submit");
		e.preventDefault();
		e.stopPropagation();

		if (password.length < 6) {
			setFormError({ lengthError: "Password length must be six or longer" });
			return;
		}

		console.log(email, password);

		signInWithEmailAndPassword(email, password).then(() => {
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

			// Toast
			toast.success("User Logged In Successfully", {
				toastId: "user-login-successfully",
				theme: "colored",
			});
		});

		e.target.reset();
	};

	const handlePsasswordReset = async (e) => {
		e.stopPropagation();

		setFormError({ lengthError: "", passwordResetError: "" });

		if (email === "") {
			setFormError({
				passwordResetError:
					"Please give your email address for password reset.",
				lengthError: "",
			});
		}

		await sendPasswordResetEmail(email);

		setEmail("");
	};

	if (sending) {
		toast.info("Email Sent", { toastId: "password-reset-id" });
	}

	return (
		<div className='container my-5'>
			<h1 className='text-center text-secondary my-3'>Login</h1>
			<form onSubmit={handleSubmit} className='w-50 mx-auto'>
				<div className='mb-3'>
					<input
						type='email'
						className='form-control'
						name='email'
						id='email'
						placeholder='Enter Your Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					{formError.passwordResetError && (
						<p className='text-danger'>{formError.passwordResetError}</p>
					)}
				</div>
				<div className='mb-1'>
					<input
						type='password'
						className='form-control'
						name='password'
						id='password'
						placeholder='Enter Your Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{formError.lengthError ? (
						<div id='confirmPassword' className='form-text text-danger'>
							{formError.lengthError}
						</div>
					) : (
						<div id='confirmPassword' className='form-text text-secondary '>
							Password length must be six characters or longer
						</div>
					)}
				</div>
				{error && <p className='text-danger'>{error.message}</p>}
				<div className='d-flex justify-content-between '>
					<Link to='/register' className='mt-2 text-decoration-none text-muted'>
						Are you new?
					</Link>
					<Link
						to='#'
						onClick={handlePsasswordReset}
						className='btn btn-link mb-1 text-decoration-none text-muted'
					>
						Forget Password
					</Link>
				</div>
				<button type='submit' className='btn btn-secondary'>
					Login
				</button>
			</form>

			<SocialLogin />
		</div>
	);
};

export default Login;
