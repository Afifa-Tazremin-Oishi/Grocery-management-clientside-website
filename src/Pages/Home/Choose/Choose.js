import { ChooseAccordion } from "./ChooseAccordion";
import { Contact } from "./Contact";

const Choose = () => {
	return (
		<div className='container my-5'>
			<div className='row align-items-center'>
				<h2 className='text-muted text-center text-uppercase mb-5'>
					Why Choose Us?
				</h2>
				<div className='col-md-6 col-sm-12'>
					<ChooseAccordion />
				</div>
				<div className='col-md-6 col-sm-12'>
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default Choose;
