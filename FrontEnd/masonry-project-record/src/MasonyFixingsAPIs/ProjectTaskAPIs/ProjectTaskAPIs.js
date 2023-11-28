import { api } from "../ApiConfig";

const ProjectTaskAPIs = {

    GetProjectTask: (projectTaskID) => {
        const response = api.request({
            url: 'project-task/' + projectTaskID,
            method: 'GET'
        }  )
        return response;
    },

    PostProjectTask: (projectID, newProjectTask) => {
        const response = api.request({
            url: 'project/' + projectID + '/task',
            method: 'POST',
            data: newProjectTask
        })
        return response;
    },


    GetProjectTaskProducts: (projectTaskID) => {
        const response = api.request({
            url: 'project-task/' + projectTaskID + '/products',
            method: 'GET',
        })
    },

    PostProjectTaskProduct: (projectTaskID, newProducts) => {
        const response = api.request({
            url: 'project-task/' + projectTaskID + '/products',
            method: 'POST',
            data: newProducts
        })
        return response;
    },



}
export default ProjectTaskAPIs;