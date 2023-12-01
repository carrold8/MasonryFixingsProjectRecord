import { api } from "../ApiConfig";

const CompanyAPIs = {


    GetAllCompanies: () => { 
         const response =  api.request({
            url: 'company',
            methodL: 'GET'
         })
         return response
    }
    

}
export default CompanyAPIs;