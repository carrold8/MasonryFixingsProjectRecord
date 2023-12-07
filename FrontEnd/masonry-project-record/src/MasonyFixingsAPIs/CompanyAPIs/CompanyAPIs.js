import { api } from "../ApiConfig";

const CompanyAPIs = {


    GetAllCompanies: () => { 
         const response =  api.request({
            url: 'company',
            method: 'GET'
         })
         return response
    },

    GetCompany: (companyID) => { 
        const response =  api.request({
           url: 'company/' + companyID,
           method: 'GET'
        })
        return response
    },

    PutCompany: (companyID, putJSON) => {
        const response = api.request({
            url: 'company/' + companyID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    PostCompany: (postJSON) => {
        const response = api.request({
            url: 'company',
            method: 'POST',
            data: postJSON
        })
        return response;
    },

    GetCompanyHeadOffice: (companyID) => {
        const response =  api.request({
            url: 'company/' + companyID + '/head-office',
            method: 'GET'
         })
         return response
    },

    PutCompanyHeadOffice: (companyID, putJSON) => {
        const response = api.request({
            url: 'company/' + companyID + '/head-office',
            method: 'PUT',
            data: putJSON
        })
        return response;
    },

    GetCompanyEmployees: (companyID) => {
        const response = api.request({
            url: 'company/' + companyID +'/employees',
            method: 'GET'
        })
        return response;
    },

    PostCompanyEmployee: (companyID, postJSON) => {
        const response = api.request({
            url: 'company/' + companyID + '/employee',
            method: 'POST',
            data: postJSON
        })
        return response;
    }
    

}
export default CompanyAPIs;