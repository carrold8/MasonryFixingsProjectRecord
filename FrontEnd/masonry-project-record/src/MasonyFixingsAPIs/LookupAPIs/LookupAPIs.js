import { api } from "../ApiConfig";

const LookupAPIs = {

    GetCounties : () => {
        const response =  api.request({
            url: 'lookup/county',
            method: 'GET'
         })
         return response
    },

    GetCountries : () => {
        const response =  api.request({
            url: 'lookup/country',
            method: 'GET'
         })
         return response
    },

    GetEmployeeType : () => {
        const response =  api.request({
            url: 'lookup/employee-type',
            method: 'GET'
         })
         return response
    },

    GetCompanyType : () => {
        const response =  api.request({
            url: 'lookup/company-type',
            method: 'GET'
         })
         return response
    },

    // GetTaskType : () => {
    //     const response =  api.request({
    //         url: 'lookup/task-type',
    //         methodL: 'GET'
    //      })
    //      return response
    // },

    GetTaskType : (taskID) => {
        const response =  api.request({
            url: 'lookup/task/'+ taskID +'/task-type',
            method: 'GET'
         })
         return response
    },
    

    GetCategory : () => {
        const response =  api.request({
            url: 'lookup/category',
            method: 'GET'
         })
         return response
    },
    GetCategorySectors : (categoryID) => {
        const response =  api.request({
            url: 'lookup/category/' + categoryID + '/sectors',
            method: 'GET'
         })
         return response
    },
    GetSector : () => {
        const response =  api.request({
            url: 'lookup/sector',
            method: 'GET'
         })
         return response
    },

    GetFrameMaterial : () => {
        const response =  api.request({
            url: 'lookup/frame-material',
            method: 'GET'
         })
         return response
    },

    GetFloorMaterial : () => {
        const response =  api.request({
            url: 'lookup/floor-material',
            method: 'GET'
         })
         return response
    },

    GetEnvelopeMaterial : () => {
        const response =  api.request({
            url: 'lookup/envelope-material',
            method: 'GET'
         })
         return response
    },
    GetRoofMaterial : () => {
        const response =  api.request({
            url: 'lookup/roof-material',
            method: 'GET'
         })
         return response
    },

    GetPartitioningMaterial : () => {
        const response =  api.request({
            url: 'lookup/partitioning-material',
            method: 'GET'
         })
         return response
    },

    GetTask : () => {
        const response =  api.request({
            url: 'lookup/task',
            method: 'GET'
         })
         return response
    },

    GetStage : () => {
        const response =  api.request({
            url: 'lookup/stage',
            method: 'GET'
         })
         return response
    },
    GetStageTasks : (stageID) => {
        const response =  api.request({
            url: 'lookup/stage/' + stageID + '/tasks',
            method: 'GET'
         })
         return response
    },

    GetUsers : () => {
        const response =  api.request({
            url: 'lookup/users',
            method: 'GET'
         })
         return response
    },

    GetProducts: () => {
        const response = api.request({
            url: 'lookup/products',
            method: 'GET'
        })
        return response;
    }

}
export default LookupAPIs;