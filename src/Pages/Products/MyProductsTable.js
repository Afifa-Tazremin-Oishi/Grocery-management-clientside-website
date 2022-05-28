import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loader from "../Share/Loader";
import { GlobalFilter } from "./GlobalFilter";
import "./table.css";

const MyProductsTable = () => {
	const COLUMNS = [
		{
			Header: "Product ID",
			accessor: "_id",
		},
		{
			Header: "Name",
			accessor: "name",
		},
		{
			Header: "Supplier Name",
			accessor: "supplierName",
		},
		{
			Header: "Image URL",
			accessor: "imgUrl",
			Cell: ({ row }) => {
				return (
					<div className='table-image-container'>
						<img className='table-image' src={`${row.values.imgUrl}`} alt='' />
					</div>
				);
			},
		},
		{
			Header: "Description",
			accessor: "description",
		},
		{
			Header: "Price",
			accessor: "price",
		},
		{
			Header: "Quantity",
			accessor: "quantity",
		},
		{
			Header: "Sold",
			accessor: "sold",
		},
		{
			Header: "Actions",
			accessor: "actions",
			Cell: (props) => {
				// console.log(props);
				return (
					<>
						<Link
							to={`/products/${props.row.original._id}`}
							className='btn btn-outline-secondary mb-1'
						>
							Details
						</Link>{" "}
						<button
							onClick={() => handleDelete(props.row.original._id)}
							className='btn btn-outline-danger mb-1'
						>
							Delete
						</button>
					</>
				);
			},
		},
	];

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [user, userLoading] = useAuthState(auth);
	const email = user.email;
	const navigate = useNavigate();

	useEffect(() => {
		if (email) {
			axios
				.get(
					`https://sleepy-dusk-14120.herokuapp.com/products/myProducts?email=${email}`,
					{
						headers: {
							authorization: `Bearer ${localStorage.getItem("jwt")}`,
						},
					}
				)
				.then((response) => {
					setProducts(response.data);
					setLoading(false);
					// console.log(products);
				})
				.catch((error) => {
					console.log(error.message);
					toast.error(error.message, { theme: "dark", toastId: "jwt-error" });
					localStorage.removeItem("jwt");
					signOut(auth);
					navigate("/login");
				});
		} else {
			console.log("Try Again");
		}
	}, [email]);

	const handleDelete = (_id) => {
		const confirmation = window.confirm(`Are you sure sure? id: ${_id}`);
		if (confirmation) {
			axios
				.delete(
					`https://sleepy-dusk-14120.herokuapp.com/products/${_id}`
				)
				.then((response) => {
					toast.warning("Delete Successfully", {
						id: "Porduct Delete",
						theme: "colored",
					});

					const restOfProducts = products.filter(
						(product) => product._id !== _id
					);
					setProducts(restOfProducts);
				})
				.catch((error) => console.log(error));
		}
	};

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => products, [products]);

	const tableInstance = useTable(
		{
			columns,
			data,
			initialState: {
				pageSize: 3,
				pageIndex: 0,
			},
		},

		useGlobalFilter,
		usePagination
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		// rows,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		prepareRow,
		setGlobalFilter,
		state,
	} = tableInstance;

	const { globalFilter, pageIndex, pageSize } = state;

	return (
		<div className=''>
			{loading || userLoading ? (
				<Loader />
			) : (
				<div className='table-responsive'>
					<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
					<table {...getTableProps()} className='table table-striped'>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th key={column.id} {...column.getHeaderProps()}>
											{column.render("Header")}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{page.map((row) => {
								prepareRow(row);
								return (
									<tr key={row.id} {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td key={cell.id} {...cell.getCellProps()}>
													{cell.render("Cell")}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className='container'>
						<div className='row  p-3'>
							<div className='d-flex justify-content-center mb-3'>
								<span className='pt-2 text-secondary'>
									Page{" "}
									<strong className='text-secondary'>
										{pageIndex + 1} of {pageOptions.length}
									</strong>{" "}
								</span>

								<select
									className='form-select ms-2'
									style={{ width: "150px", border: "1px solid #ddd" }}
									value={pageSize}
									onChange={(e) => setPageSize(Number(e.target.value))}
								>
									{[3, 6, 12].map((pageSize) => (
										<option key={pageSize} value={pageSize}>
											Show {pageSize}
										</option>
									))}
								</select>
							</div>
							<div className='d-flex justify-content-center'>
								<button
									className='me-2 btn btn-outline-danger'
									onClick={() => gotoPage(0)}
									disabled={!canPreviousPage}
								>
									{"<<"}
								</button>
								<button
									className='me-2 btn btn-outline-danger'
									onClick={() => previousPage()}
									disabled={!canPreviousPage}
								>
									Previous
								</button>
								<button
									className='ms-2 btn btn-outline-danger'
									onClick={() => nextPage()}
									disabled={!canNextPage}
								>
									Next
								</button>
								<button
									className='ms-2 btn btn-outline-danger'
									onClick={() => gotoPage(pageCount - 1)}
									disabled={!canNextPage}
								>
									{">>"}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyProductsTable;
