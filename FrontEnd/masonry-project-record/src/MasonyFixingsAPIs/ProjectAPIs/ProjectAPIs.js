import { api } from "../ApiConfig"

const ProjectAPIs = {

    GetAllProjects: () => {
        const response = api.request({
            url: 'project',
            method: 'GET'
        })
        return response;
    },

    PostProject: (postJSON) => {
        const response = api.request({
            url: 'project',
            method: 'POST',
            data: postJSON
        })
        return response;
    },

    GetProject: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID,
            method: 'GET'
        })
        return response;
    },
    DeleteProject: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID,
            method: 'DELETE'
        })
        return response;
    },
    
    GetProjectTitleInfo: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/title-info',
            method: 'GET'
        })
        return response;
    },
    PutProjectTitleInfo: (projectID, postJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/title-info',
            method: 'PUT',
            data: postJSON
        })
        return response;
    },

    GetProjectAddress: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/address',
            method: 'GET'
        })
        return response;
    },

    PutProjectAddress: (addressID, putJSON) => {
        const response = api.request({
            url: 'project/address/' + addressID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    },
    GetProjectMaterials: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/materials',
            method: 'GET'
        })
        return response;
    },
    PutProjectMaterials: (projectID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/materials',
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    GetProjectMainContractor: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/main-contractor',
            method: 'GET'
        })
        return response;
    },
    PutProjectMainContractorEmployees: (projectID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/main-contractor',
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    GetProjectEngineer: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/engineer',
            method: 'GET'
        })
        return response;
    },
    PutProjectEngineer: (projectID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/engineer',
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    GetProjectArchitect: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/architect',
            method: 'GET'
        })
        return response;
    },
    PutProjectArchitect: (projectID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/architect',
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    // Gets the required and provided on induction data for a project
    GetProjectInduction: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/induction',
            method: 'GET'
        })
        return response;
    },
    PutProjectInduction: (projectID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/induction',
            method: 'PUT',
            data: putJSON
        })
        return response;
    },
    PostProjectInduction: (projectID, postJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/inductions',
            method: 'POST',
            data: postJSON
        })
        return response;
    },
    
    // Gets list of inductons for a project
    GetProjectInductionList: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/induction-list',
            method: 'GET'
        })
        return response;
    },
    
    PutProjectInductionList: (projectID, inductionID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/induction-list/' +  inductionID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    },
    DeleteProjectInductionList: (projectID, inductionID) => {
        const response = api.request({
            url: 'project/' + projectID + '/induction-list/' +  inductionID,
            method: 'DELETE'
        })
        return response;
    },

    GetProjectAnchorTraining: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/anchor-training',
            method: 'GET'
        })
        return response;
    },
    PutProjectAnchorTraining: (projectID, anchorTrainingID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/anchor-training/' +  anchorTrainingID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    },
    PostProjectAnchorTraining: (projectID, postJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/anchor-training',
            method: 'POST',
            data: postJSON
        })
        return response;
    },
    DeleteProjectAnchorTraining: (projectID, anchorTrainingID) => {
        const response = api.request({
            url: 'project/' + projectID + '/anchor-training/' +  anchorTrainingID,
            method: 'DELETE'
        })
        return response;
    },

    GetProjectTasks: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/tasks',
            method: 'GET'
        })
        return response;
    },
    PostProjectTask: (projectID, postJSON) => {
        const response = api.request({
            url: 'project/'+projectID+'/task',
            method: 'POST',
            data: postJSON
        })
        return response;
    },
    PutProjectTask: (projectID, projectTaskID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/task/' +  projectTaskID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    },
} 
export default ProjectAPIs;