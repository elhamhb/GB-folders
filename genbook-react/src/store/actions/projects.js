import * as actionTypes from './actionTypes';
import axios from '../../axios-employee-baseUrl';

export const addProjectSuccess = ( id, newProjectData ) => {
    return {
        type: actionTypes.ADD_PROJECT_SUCCESS,
        projectId: id,
        newProjectData: newProjectData
    };
};

export const addProjectFail = ( error ) => {
    return {
        type: actionTypes.ADD_PROJECT_FAIL,
        error: error
    };
}

export const addProjectStart = () => {
    return {
        type: actionTypes.ADD_PROJECT_START
    };
};

export const addProject = (newProjectData) => {
    return dispatch => {
        dispatch( addProjectStart() );
        // console.log("newProjectData",newProjectData);
        axios.post( '/projects', newProjectData )
            .then( response => {
                dispatch( addProjectSuccess( "name", newProjectData ) );
            } )
            .catch( error => {
                dispatch( addProjectFail( error ) );
            } );
    };
};

export const addProjectInit = () => {
    return {
        type: actionTypes.ADD_PROJECT_INIT
    };
};

export const fetchProjectsSuccess = ( projects ) => {
    return {
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects: projects
    };
};

export const fetchProjectsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_PROJECTS_FAIL,
        error: error
    };
};

export const fetchProjectsStart = () => {
    return {
        type: actionTypes.FETCH_PROJECTS_START
    };
};

export const fetchProjects = () => {
    return dispatch => {
        dispatch(fetchProjectsStart());
        
        axios.get( '/projects')
            .then( res => {
                dispatch(fetchProjectsSuccess(res.data.projectList));
            } )
            .catch( err => {
                dispatch(fetchProjectsFail(err));
            } );
    };
};