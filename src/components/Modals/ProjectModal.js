import Slider from 'rc-slider';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Select from 'react-select';

const ProjectModal = ({
	setText,
	setStatus,
	setWorkers,
	employees,
	setTitle,
	status,
	workersSelected,
}) => {
	const options = employees.map((item) => ({
		value: item.name,
		work: item.job,
		label: item.name,
	}));

	return (
		<Container>
			<Row className="ml-2">
				<span>Tittel på prosjekt:</span>
			</Row>
			<Row className="mb-2 ml-2">
				<input
					placeholder="Elkjøp Lørenskog"
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Row>
			<Row className="ml-2">
				<span>Om prosjektet:</span>
			</Row>
			<Row className="mb-2 ml-2 ">
				<input
					placeholder="Utvikle brukersystem"
					onChange={(e) => setText(e.target.value)}
				/>
			</Row>

			<Row className="m-2 ">
				<Slider onChange={(value) => setStatus(value)} />
			</Row>
			<Row className="justify-content-center">
				<span>Status: {status == null ? 0 : status}%</span>
			</Row>
			<Select
				className="m-2"
				options={options}
				onChange={(value) => setWorkers({ name: value.value, job: value.work })}
			/>

			<Row className="m-2 justify-content-center">
				<p>Antall valgt: {workersSelected.length}</p>
			</Row>
		</Container>
	);
};

export default ProjectModal;
