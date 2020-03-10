import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import  Tasks  from '../../componenets/Tasks/Tasks';
import Projects from '../../componenets/Projects/Projects';

import axios from '../../axios-employee-baseUrl';
import * as actions from '../../store/actions/index';
import Spinner from '../../componenets/UI/Spinner/Spinner';


// import { }


const EmployeeDashboard = props => {


    return (
        <React.Fragment>
            <p> Welcome to Employees's Dashboard!</p>
            
            <Tasks />

            <Projects />
          
        </React.Fragment>
      );

}


export default EmployeeDashboard;

