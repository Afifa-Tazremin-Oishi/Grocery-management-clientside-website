import { Accordion, Table } from "react-bootstrap";

const Blog = () => {
	return (

		<div className='px-5 mt-5'>


			<h1 className='p-5 justify-content-center text-center'> Question Part</h1>

			<Accordion defaultActiveKey={['0']} alwaysOpen>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Difference between JS and Node.js?</Accordion.Header>
					<Accordion.Body className='mt-3'>
						
						<strong>Node.js</strong>
							<p>
							It is a JS runtime environment that lets Javascript to be run on the server-side. It is cross-platform, and it thus allows the JS code to run outside any browser easily. There are various modules in NodeJS, and it is mainly utilised in the process of web development. It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.
							</p>
							<strong>Javascript</strong>
							<p>
							It is a scripting language. Javascript is mainly utilised in making the HTML web pages more dynamic and interactive. It is a high-level language, and it makes use of the Oops concept. Yet, it is based primarily on the concept of prototype inheritance. It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.
							</p>
						
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>  When should we use Node.js and MongoDB?</Accordion.Header>
					<Accordion.Body>
						<p>
						MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js. Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc.These two technologies are for different parts of a typical web server system. We can't substitute one for the other. Instead, we can use them together.
						</p>


					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>  What's the purpose of JWT and how does it work??</Accordion.Header>
					<Accordion.Body>
						<p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs are unique among web tokens in that they include a set of claims. Claims are a way for two parties to exchange information. The nature of these assertions is determined by the use case at hand. A claim could state who issued the token, how long it's valid, or what rights the client has been given.A JWT is a three-part string separated by dots (.) that is serialized using base64.</p>


					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header> Difference between SQL and NoSQL databases?</Accordion.Header>
					<Accordion.Body>
						<p>MySQL is a relational database that is based on tabular design whereas NoSQL is non-relational in nature with its document-based design. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
						

					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

		</div>
	);


};

export default Blog;
