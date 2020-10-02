import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Employee = (props) => {
	return (
		<Col md={4} lg={3} xl={3} className="m-2">
			<Card>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>{props.job}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Employee;
