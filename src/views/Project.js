import React, { useEffect, useState } from 'react';
import { Container, ProgressBar, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListOfEmployees from './ListOfEmployees';

const Project = (props) => {
  const { index } = useParams();
  const [project, setProject] = useState(props.list[index]);
  const [employees, setEmployees] = useState(props.list[index].employees);

  useEffect(() => {
    setEmployees(props.list[index].employees);
  });

  return (
    <Container>
      <Row className="justify-content-center">
        <h3>{project.title}</h3>
      </Row>
      <ProgressBar now={20} />
      <Row className="mt-5">
        <p>{project.text}</p>
      </Row>

      <ListOfEmployees
        type="employee"
        openModal={props.openModal}
        list={employees}
      />
    </Container>
  );
};

export default Project;
