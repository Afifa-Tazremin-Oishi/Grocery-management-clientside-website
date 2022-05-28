import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
	const [user] = useAuthState(auth);

	const navLinkStyles = ({ isActive }) => {
		return {
			borderBottom: isActive ? "1px solid white" : "",
			fontWeight: isActive ? "bold" : "normal",
		};
	};

	const handleSignOut = () => {
		localStorage.removeItem("jwt");
		signOut(auth);
	};

	return (
		<Navbar bg='primary' expand='lg'>
			<Container>
				<Navbar.Brand as={Link} to='/' className='text-white'>
					<p className="fw-bold" style={{color:'greenyellow'}}> <strong>Grab Grocers</strong></p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='ms-auto my-2 my-lg-0'
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link
							as={NavLink}
							to='/'
							className='text-white'
							style={navLinkStyles}
						>
							Home
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='/blog'
							className='text-white'
							style={navLinkStyles}
						>
							Blog
						</Nav.Link>
						{user ? (
							<>
								<Nav.Link
									as={NavLink}
									to='/products'
									className='text-white'
									style={navLinkStyles}
								>
									Manage Products
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to='/myProducts'
									className='text-white'
									style={navLinkStyles}
								>
									<span style={{color:'magenta'}}>{user.displayName ? user.displayName + " " : "My "}</span> Products
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to='/addProduct'
									className='text-white'
									style={navLinkStyles}
								>
									Add Product
								</Nav.Link>
								<button
									onClick={handleSignOut}
									className='btn btn-primray btn-link text-white text-decoration-none'
								>
									SignOut
								</button>
							</>
						) : (
							<>
								<Nav.Link
									as={NavLink}
									to='/register'
									className='text-white'
									style={navLinkStyles}
								>
									Register
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									to='/login'
									className='text-white'
									style={navLinkStyles}
								>
									Login
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
