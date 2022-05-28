import axios from "axios";
import { useState } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loader from "../Share/Loader";
import SocialLogin from "./SocialLogin";

const Registration = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [formError, setFormError] = useState({
		lengthError: "",
		confrimError: "",
	});
	const [agree, setAgree] = useState(false);

	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

	const [updateProfile] = useUpdateProfile(auth);

	if (user) {
		console.log("Registration User: ", user.user);
		return <Navigate to={from} replace={true} />;
	}

	if (loading) {
		return <Loader />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password.length < 6) {
			setFormError({ lengthError: "Password length must be six or longer" });
			return;
		}

		if (password !== confirmPassword) {
			setFormError({
				confrimError: "Password and Confirm Password must be the same",
			});
			return;
		}

		console.log(name, email, password, confirmPassword);

		await createUserWithEmailAndPassword(email, password);

		// JWT
		const { data } = await axios.post(
			`https://sleepy-dusk-14120.herokuapp.com/login`,
			{
				email,
			}
		);
		// console.log("JWT Data: ", data);
		localStorage.setItem("jwt", data.accessToken);

		toast.success("User Created Successfully", {
			toastId: "user-created-successfully",
			theme: "colored",
		});

		await updateProfile({ displayName: name });
		toast.success("Verification Email Send", {
			toastId: "verification-email",
			theme: "dark",
		});
		e.target.reset();
	};

	return (
		<div className='container my-5'>
			<h1 className='text-center text-secondary my-3'>Registration</h1>
			<form onSubmit={handleSubmit} className='w-50 mx-auto'>
				<div className='mb-3'>
					<input
						type='text'
						className='form-control'
						name='name'
						id='name'
						placeholder='Enter Your Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
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
				</div>
				<div className='mb-3'>
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
						<div id='confirmPassword' className='form-text text-secondary'>
							Password length must be six characters or longer
						</div>
					)}
				</div>
				<div className='mb-3'>
					<input
						type='password'
						className='form-control'
						name='confirmPassword'
						id='confirmPassword'
						placeholder='Enter Your Confirm Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					{formError.confrimError ? (
						<div id='confirmPassword' className='form-text text-danger'>
							{formError.confrimError}
						</div>
					) : (
						<div id='confirmPassword' className='form-text text-secondary'>
							Password length must be six characters or longer
						</div>
					)}
				</div>
				{error && <p className='text-danger'>{error.message}</p>}

				<div className='my-3'>
					<div className='form-check'>
						<input
							type='checkbox'
							className='form-check-input'
							id='checkout'
							onClick={() => setAgree(!agree)}
						/>
						<label
							className={`form-check-label  fs-6 ${agree ? "text-muted" : "text-danger"
								}`}
							htmlFor='exampleCheck1'
						>
							Accept Terms & Conditions
						</label>
					</div>
				</div>
				<div className='d-flex justify-content-between'>
					<button type='submit' className='btn btn-secondary' disabled={!agree}>
						Register
					</button>
					<p className='text-secondary'>
						Already Registered? Go{" "}
						<Link to='/login' className='mt-2 text-muted fs-5'>
							Sign In
						</Link>
					</p>
				</div>
			</form>

			<SocialLogin />
		</div>
	);
};

export default Registration;
