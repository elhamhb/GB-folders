import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import  ProjectTable  from './ProjectTable/ProjectTable';

// import axios from '../../axios-employee-baseUrl';
import * as actions from '../../store/actions/index';
import { updateObject , checkValidity} from '../../shared/utility';

import Spinner from '../../componenets/UI/Spinner/Spinner';
import Modal from '../../componenets/UI/Modal/Modal'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import classes from './Projects.module.scss'



const Projects = props => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    onFetchProjects();
  }, []);

  const prjs = useSelector(state => {
    return state.projects.projects;
  });

  const onFetchProjects = useCallback(
      () => dispatch(actions.fetchProjects()),
      [dispatch]
    );

  const onAddNewProject = formData =>
  dispatch(actions.addProject(formData));

  const [addPrjBtnStatus, setAddPrjBtnStatus] = useState(false);
  
  const intitilaForm = {Name: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Name'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  TimePeriod: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'TimePeriod'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  Customer: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Customer'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  Skills: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Skills'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },}

  const [newProjectForm, setNewProjectForm]= useState(intitilaForm);
  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(newProjectForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        newProjectForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedOrderForm = updateObject(newProjectForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setNewProjectForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in newProjectForm) {
    formElementsArray.push({
      id: key,
      config: newProjectForm[key]
    });
  }

  const addProjectHandler = event => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in newProjectForm) {
      formData[formElementIdentifier] = newProjectForm[formElementIdentifier].value;
    }

    
    
    setAddPrjBtnStatus(false);
    onAddNewProject(formData);
    setNewProjectForm(intitilaForm);
  };


  let form = (
    <form onSubmit={addProjectHandler}>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid}>
        Submit
      </Button>
    </form>
  );


  return(
    <div className={classes.ProjectsSection}>
        <h2 >Projects</h2>
        {prjs.length === 0 ? (    
            <Spinner />
        ) : (
            <React.Fragment>
              <ProjectTable {...prjs} />

              <Button btnType="Success"  clicked={() => setAddPrjBtnStatus(true)} >
                    Add Project 
              </Button>

                <Modal show={addPrjBtnStatus}  modalClosed={() => 
                  {setAddPrjBtnStatus(false); setNewProjectForm(intitilaForm);setFormIsValid(false)}}>
                 {form}
              </Modal>

            </React.Fragment>

        )}
    </div>
  )
} 

export default Projects;