import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import RequiredAuth from "./Pages/Authentication/RequiredAuth";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home/Home";
import AddProduct from "./Pages/Products/AddProduct";
import MyProductsTable from "./Pages/Products/MyProductsTable";
import ProductDetails from "./Pages/Products/ProductDetails";
import ProductsTable from "./Pages/Products/ProductsTable";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route
					path='/products'
					element={
						<RequiredAuth>
							<ProductsTable />
						</RequiredAuth>
					}
				/>
				<Route
					path='/myProducts'
					element={
						<RequiredAuth>
							<MyProductsTable />
						</RequiredAuth>
					}
				/>
				<Route
					path='/products/:id'
					element={
						<RequiredAuth>
							<ProductDetails />
						</RequiredAuth>
					}
				/>
				<Route
					path='/addProduct'
					element={
						<RequiredAuth>
							<AddProduct />
						</RequiredAuth>
					}
				/>
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
