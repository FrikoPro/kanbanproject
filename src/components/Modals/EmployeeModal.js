import React from 'react';

import { Row, Container } from 'react-bootstrap';

const NewEmployeePrompt = ({ setName, setText }) => {
	return (
		<Container>
			<Row className="ml-2">
				<span>Navn: </span>
			</Row>
			<Row className="mb-2 ml-2">
				<input placeholder="Ola..." onChange={(e) => setName(e.target.value)} />
			</Row>
			<Row className="ml-2">
				<span>Yrke: </span>
			</Row>
			<Row className="mb-2 ml-2">
				<input
					placeholder="Programmerer"
					onChange={(e) => setText(e.target.value)}
				/>
			</Row>
		</Container>
	);
};

export default NewEmployeePrompt;
