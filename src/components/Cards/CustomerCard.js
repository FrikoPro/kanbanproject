import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { GrFacebook } from 'react-icons/gr';

const Customer = (props) => {
	return (
		<Col md={4} lg={3} xl={3} className="text-center m-2">
			<Card>
				<Row className="justify-content-center">
					<Image
						style={{ width: '100px', height: '100px' }}
						className="card-img-top m-2"
						src={props.logo}
						alt="Card image cap"
					/>
				</Row>

				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Customer;
