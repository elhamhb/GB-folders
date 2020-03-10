import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    projects: [],
    loading: false,
};

const addProjectInit = ( state, action ) => {
    return updateObject( state, { added: false } );
};

const addProjectStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addProjectSuccess = ( state, action ) => {

    const newPrj = updateObject( action.newProjectData, { id: action.projectId } );


    return updateObject( state, {
        loading: false,
        projects: state.projects.concat(newPrj),  
    } );
    
};

const addProjectFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchProjectsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchProjectsSuccess = ( state, action ) => {
    return updateObject( state, {
        projects: action.projects,
        loading: false
    } );
};

const fetchProjectsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PROJECT_INIT: return addProjectInit( state, action );
        case actionTypes.ADD_PROJECT_START: return addProjectStart( state, action );
        case actionTypes.ADD_PROJECT_SUCCESS: return addProjectSuccess( state, action )
        case actionTypes.ADD_PROJECT_FAIL: return addProjectFail( state, action );
        case actionTypes.FETCH_PROJECTS_START: return fetchProjectsStart( state, action );
        case actionTypes.FETCH_PROJECTS_SUCCESS: return fetchProjectsSuccess( state, action );
        case actionTypes.FETCH_PROJECTS_FAIL: return fetchProjectsFail( state, action );
        default: return state;
    }
};

export default reducer;