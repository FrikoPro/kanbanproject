import React from 'react';
import { Col, Row } from 'react-bootstrap';
import EmployeeCard from '../components/Cards/EmployeeCard';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const ListOfEmployees = (props) => {
	return (
		<Row className="m-2">
			{props.list.map((item, index) => (
				<EmployeeCard name={item.name} key={index} job={item.job} />
			))}
			<Col md={1} lg={1} xl={1} className="align-self-center">
				<BsFillPlusSquareFill size={50} onClick={props.openModal} />
			</Col>
		</Row>
	);
};

export default ListOfEmployees;
