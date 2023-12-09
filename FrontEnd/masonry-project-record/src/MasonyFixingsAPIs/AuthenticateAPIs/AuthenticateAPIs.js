import { api } from "../ApiConfig";

const AuthenticateAPIs = {

    PostAuthenticate: (postJON) => {
        const response = api.request({
            url: 'authenticate',
            method: 'POST',
            data: postJON
        })
        return response;
    }
}
export default AuthenticateAPIs;