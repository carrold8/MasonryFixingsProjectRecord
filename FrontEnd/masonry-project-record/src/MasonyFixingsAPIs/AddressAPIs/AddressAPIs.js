import { api } from "../ApiConfig";

const AddressAPIs = {

    GetAddress: (addressID) => {
        const response = api.request({
            url: 'address/' + addressID,
            method: 'GET'
        })
        return response;
    }
}
export default AddressAPIs;