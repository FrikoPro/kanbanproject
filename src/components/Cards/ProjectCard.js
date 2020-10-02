import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
	return (
		<Col xs={12} md={4} as={Link} to={`/prosjekt/${props.index}`}>
			<Card>
				<Card.Body>
					<Row className="justify-content-end mr-1"></Row>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						{props.text}
						<br></br>
						Antall arbeidere: {props.employees.length}
					</Card.Text>
					<ProgressBar now={props.status} />
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ProjectCard;
