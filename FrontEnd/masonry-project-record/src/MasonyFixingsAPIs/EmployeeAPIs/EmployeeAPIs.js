import { api } from "../ApiConfig";

const EmployeeAPIs = {

    GetEmployee: (employeeID) => {
        const response = api.request({
            url: 'employee/' + employeeID,
            method: 'GET'
        })
        return response;
    },
    PutEmployee: (employeeID, putJSON) => {
        const response = api.request({
            url: 'employee/' + employeeID,
            method: 'PUT',
            data: putJSON
        })
        return response;
    }
}
export default EmployeeAPIs;