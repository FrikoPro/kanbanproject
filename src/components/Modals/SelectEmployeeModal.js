import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Select from 'react-select';

const SelectEmployeeModal = (props) => {
	const options = props.employees.map((item) => ({
		value: item.name,
		work: item.job,
		label: item.name,
	}));

	return (
		<Container>
			<Row></Row>

			<Select
				className="m-2"
				options={options}
				onChange={(value) =>
					props.setWorkers({ name: value.value, job: value.work })
				}
			/>
		</Container>
	);
};

export default SelectEmployeeModal;
