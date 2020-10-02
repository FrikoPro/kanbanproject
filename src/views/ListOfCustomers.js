import React from 'react';
import { Row } from 'react-bootstrap';
import CustomerCard from '../components/Cards/CustomerCard';

const ListOfCustomers = (props) => {
	return (
		<Row className="justify-content-center">
			{props.list.map((item, index) => (
				<CustomerCard key={index} title={item.company} logo={item.logo} />
			))}
		</Row>
	);
};

export default ListOfCustomers;
