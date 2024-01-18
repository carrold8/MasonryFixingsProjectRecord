import { api } from "../ApiConfig";

const UserAccountAPIs = {
    GetUserAccount: () => {
        const response = api.request({
            url: 'user-account',
            method: 'GET'
        }  )
        return response;
    },
    PutUserAccountPassword: (putJSON) => {
        const response = api.request({
            url: 'user-account/password',
            method: 'PUT',
            data: putJSON
        })
        return response;
    }
}
export default UserAccountAPIs;