import { api } from "../ApiConfig"

const ProjectAPIs = {

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

    GetProjectMaterials: (projectID) => {
        const response = api.request({
            url: 'project/' + projectID + '/materials',
            method: 'GET'
        })
        return response;
    },
    PutProjectMaterials : (projectID, putJSON) => {
        const response = api.request({
            url: 'project/' + projectID + '/materials',
        method: 'PUT',
        data: putJSON
        })
        return response;
    }

    } 
export default ProjectAPIs;