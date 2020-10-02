import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/Cards/ProjectCard';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const ListOfProjects = (props) => {
	return (
		<Row className="justify-content-start">
			{props.list.map((item, index) => (
				<ProjectCard
					index={index}
					title={item.title}
					key={index}
					text={item.text}
					status={item.status}
					employees={item.employees}
				/>
			))}
			<Col className="align-self-end justify-content-sm-center">
				<BsFillPlusSquareFill size={50} onClick={props.openModal} />
			</Col>
		</Row>
	);
};

export default ListOfProjects;
