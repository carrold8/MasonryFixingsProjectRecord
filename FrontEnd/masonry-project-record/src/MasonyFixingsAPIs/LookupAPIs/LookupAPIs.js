import { api } from "../ApiConfig";

const LookupAPIs = {

    GetCounties : () => {
        const response =  api.request({
            url: 'lookup/county',
            methodL: 'GET'
         })
         return response
    },

    GetCountries : () => {
        const response =  api.request({
            url: 'lookup/country',
            methodL: 'GET'
         })
         return response
    },

    GetEmployeeType : () => {
        const response =  api.request({
            url: 'lookup/employee-type',
            methodL: 'GET'
         })
         return response
    },

    GetCompanyType : () => {
        const response =  api.request({
            url: 'lookup/company-type',
            methodL: 'GET'
         })
         return response
    },

    GetTaskType : () => {
        const response =  api.request({
            url: 'lookup/task-type',
            methodL: 'GET'
         })
         return response
    },

    GetCategory : () => {
        const response =  api.request({
            url: 'lookup/category',
            methodL: 'GET'
         })
         return response
    },
    GetSector : () => {
        const response =  api.request({
            url: 'lookup/sector',
            methodL: 'GET'
         })
         return response
    },

    GetFrameMaterial : () => {
        const response =  api.request({
            url: 'lookup/frame-material',
            methodL: 'GET'
         })
         return response
    },

    GetFloorMaterial : () => {
        const response =  api.request({
            url: 'lookup/floor-material',
            methodL: 'GET'
         })
         return response
    },

    GetEnvelopeMaterial : () => {
        const response =  api.request({
            url: 'lookup/envelope-material',
            methodL: 'GET'
         })
         return response
    },
    GetRoofMaterial : () => {
        const response =  api.request({
            url: 'lookup/roof-material',
            methodL: 'GET'
         })
         return response
    },

    GetPartitioningMaterial : () => {
        const response =  api.request({
            url: 'lookup/partitioning-material',
            methodL: 'GET'
         })
         return response
    },

    GetTask : () => {
        const response =  api.request({
            url: 'lookup/task',
            methodL: 'GET'
         })
         return response
    },

    GetStage : () => {
        const response =  api.request({
            url: 'lookup/stage',
            methodL: 'GET'
         })
         return response
    },

    GetUsers : () => {
        const response =  api.request({
            url: 'lookup/users',
            methodL: 'GET'
         })
         return response
    },

}
export default LookupAPIs;