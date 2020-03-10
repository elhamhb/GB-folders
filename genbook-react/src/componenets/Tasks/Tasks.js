import React, { Component} from 'react';

import classes from './Tasks.module.scss'
import axios from '../../axios-employee-baseUrl';
import Spinner from '../../componenets/UI/Spinner/Spinner';

class Tasks extends Component {

    state = {
        tasks: [],
     };
     componentDidMount() {
        this.getTasks();
     }
     getTasks = () => {
        axios
            .get("/getTasks/today")
            .then(res => {
                this.setState({ tasks: res.data.tasksList})})
            .catch(err => {
                return null;
            });


     };

  
    render(){

        const tasksRows = this.state.tasks
            .map( (e,i) => {
                return (
                    <tr key={i}>
                        <td >
                            {e.taskNo}
                        </td>
                        <td>{e.Subject}</td>
                        <td>{e.Customer}</td>
                        <td>{e.Priority}</td>
                        <td>{e.Status}</td>
                        <td>{e.StartDate}</td>
                        <td>{e.DueDate}</td>
                    </tr>
                     );
            } );


        return(
            <div className={classes.TasksSection}>
                <h2>Today's tasks</h2>
            {this.state.tasks.length === 0 ? (
               
                <Spinner />
            ) : (
                <table>
                    <thead>
                    <tr>
                    <th>Task No</th>
                    <th>Subject</th>
                    <th>Customer</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    </tr>
                    </thead>

                    <tbody>
                        {tasksRows}
                    </tbody>
                        
                </table>
            )}
        </div>
        )
    }



}

export default Tasks;
