import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import ProjectModal from './ProjectModal';
import EmployeeModal from './EmployeeModal';
import { useLocation } from 'react-router-dom';
import SelectEmployeeModal from './SelectEmployeeModal';

const MyModal = (props) => {
  let loc = useLocation();

  const [name, setName] = useState(props.name);
  const [inputText, setText] = useState(props.text);
  const [status, setStatus] = useState(props.status);
  const [selectedWorkers, setWorkers] = useState([]);

  const projectIndex = loc.pathname[loc.pathname.length - 1];

  const onSave = () => {
    if (loc.pathname === '/prosjekter') {
      props.handleList({
        title: name,
        text: inputText,
        status: status,
        employees: selectedWorkers,
      });
    } else if (loc.pathname === '/ansatte') {
      props.handleWorkers({ name: name, job: inputText });
    } else if (loc.pathname === '/prosjekt/' + projectIndex) {
      props.addWorkerToProject(
        loc.pathname[loc.pathname.length - 1],
        selectedWorkers
      );
    }

    props.onHide();
  };

  const checkType = () => {
    if (loc.pathname === '/prosjekter') {
      return (
        <ProjectModal
          employees={props.list}
          workersSelected={selectedWorkers}
          setText={setText}
          setStatus={setStatus}
          setWorkers={(value) => setWorkers([...selectedWorkers, value])}
          setTitle={setName}
          status={status}
        />
      );
    } else if (loc.pathname === '/ansatte') {
      return <EmployeeModal setName={setName} setText={setText} />;
    } else if (loc.pathname === '/prosjekt/' + projectIndex) {
      return (
        <SelectEmployeeModal
          setWorkers={(value) => setWorkers([...selectedWorkers, value])}
          employees={props.list}
        />
      );
    }
  };

  const getTitle = () => {
    if (loc.pathname === '/prosjekter') {
      return 'Nytt prosjekt';
    } else if (loc.pathname === '/ansatte') {
      return 'Legg til ansatt';
    } else if (loc.pathname === '/prosjekt/' + projectIndex) {
      return 'Legg til ansatt på prosjekt';
    }
  };

  return (
    <Modal
      {...props}
      xs={12}
      centered
      aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{checkType()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={() => onSave()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
