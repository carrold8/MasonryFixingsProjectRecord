import { api } from "../ApiConfig";

const UserTypeAPIs = {
    GetUserType: () => {
        const response = api.request({
            url: 'user-type',
            method: 'GET'
        }  )
        return response;
    },
}
export default UserTypeAPIs;