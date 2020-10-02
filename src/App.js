import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ListOfProjects from './views/ListOfProjects';
import MyModal from './components/Modals/MyModal';
import Project from './views/Project';
import ListOfEmployees from './views/ListOfEmployees';
import ListOfCustomers from './views/ListOfCustomers';
import fbLogo from './images/fb-logo.png';
import goLogo from './images/go-logo.png';
import amznLogo from './images/amzn-logo.png';

function App() {
  const [listOfEmployees, addNewEmployee] = useState([
    { name: 'Fredrik', job: 'Programmerer' },
  ]);

  const [listOfProjects, addNewProject] = useState([
    {
      title: 'Nytt prosjekt',
      text:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
      status: 50,
      employees: [listOfEmployees[0]],
    },
  ]);

  const [listOfCustomers, addNewCustomer] = useState([
    { company: 'Facebook', logo: fbLogo },
    { company: 'Google', logo: goLogo },
    { company: 'Amazon', logo: amznLogo },
  ]);

  const handleNewProject = (newProject) => {
    addNewProject([...listOfProjects, newProject]);
  };

  const handleNewEmployee = (newEmployee) => {
    addNewEmployee([...listOfEmployees, newEmployee]);
  };

  const addWorkersToProject = (index, workers) => {
    let newProject = listOfProjects;

    let newArray = [];

    workers.forEach((item) => newArray.push(item));

    newProject[index].employees = newArray;

    addNewProject(newProject);

    // addNewProject([
    //   {
    //     ...listOfProjects[index],
    //     ['employees']: [...listOfProjects[index].employees, workers[0]],
    //   },
    // ]);
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <Navbar>
        <Navbar.Brand>Kanban Prosjekter</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/prosjekter">
            Prosjekter
          </Nav.Link>
          <Nav.Link as={Link} to="/ansatte">
            Ansatte
          </Nav.Link>
          <Nav.Link as={Link} to="/kunder">
            Kunder
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container>
        <main>
          <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            list={listOfEmployees}
            projects={listOfProjects}
            handleList={handleNewProject}
            handleWorkers={handleNewEmployee}
            addWorkerToProject={(index, employees) =>
              addWorkersToProject(index, employees)
            }
          />
          <Switch>
            <Route exact path="/prosjekter">
              <ListOfProjects
                openModal={() => setModalShow(true)}
                list={listOfProjects}
                type="project"
              />
            </Route>
            <Route path="/ansatte">
              <ListOfEmployees
                type="employee"
                openModal={() => setModalShow(true)}
                list={listOfEmployees}
              />
            </Route>
            <Route path="/kunder">
              <ListOfCustomers
                type="customer"
                openModal={() => setModalShow(true)}
                list={listOfCustomers}
              />
            </Route>
            <Route path="/prosjekt/:index">
              <Project
                list={listOfProjects}
                openModal={() => setModalShow(true)}
              />
            </Route>
          </Switch>
        </main>
      </Container>
    </Router>
  );
}

export default App;
