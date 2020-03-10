import React  from 'react';

const ProjectTable = props => {

    const projectList  = Object.assign({}, props);
    const projecArray = Object.keys(projectList).map(i => projectList[i])
    const projecRows = projecArray
    .map( (e,i) => {
        return (
            <tr key={i}>
                <td >
                    {e.Name}
                </td>
                <td>{e.TimePeriod}</td>
                <td>{e.Customer}</td>
                <td>{e.Skills}</td>
            </tr>
             );
    } );

 


 
    return(

        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Time Period</th>
                <th>Customer</th>
                <th>Skills</th>
                </tr>
            </thead>

            <tbody>
                {projecRows}
            </tbody>
            
        </table>

    )
}

export default ProjectTable;