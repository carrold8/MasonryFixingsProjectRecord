import { api } from "../ApiConfig";

const ProjectTaskAPIs = {

    GetUpcomingTasks: () => {
        const response = api.request({
            url: 'project-task/upcoming',
            method: 'GET'
        })
        return response;
    },

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

    DeleteProjectTask: (projectTaskID) => {
        const response = api.request({
            url: 'project-task/' + projectTaskID,
            method: 'DELETE'
        }  )
        return response;
    },


    GetProjectTaskProductList: (projectTaskID) => {
        const response = api.request({
            url: 'project-task/' + projectTaskID + '/product-list',
            method: 'GET',
        })
        return response;
    },

    GetProjectTaskProduct: (projectTaskID, projectTaskProductID) => {
        const response = api.request({
            url: '/project-task/' + projectTaskID +'/products/' + projectTaskProductID,
            method: 'GET',
        })
        return response;
    },

    PostProjectTaskProduct: (projectTaskID, newProducts) => {
        const response = api.request({
            url: 'project-task/' + projectTaskID + '/products',
            method: 'POST',
            data: newProducts
        })
        return response;
    },

    PutProjectTaskProduct: (projectTaskID, projectTaskProductID, putJSON) => {
        const response = api.request({
            url: '/project-task/' + projectTaskID +'/products/' + projectTaskProductID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    DeleteProjectTaskProduct: (projectTaskID, projectTaskProductID) => {
        const response = api.request({
            url: '/project-task/' + projectTaskID +'/products/' + projectTaskProductID,
            method: 'DELETE',
        })
        return response;
    }



}
export default ProjectTaskAPIs;