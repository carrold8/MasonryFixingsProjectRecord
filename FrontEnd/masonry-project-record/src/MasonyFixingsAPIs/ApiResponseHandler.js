
export default function ApiResponseHandler(response, navigate){

    console.log(response)
    if(response.status === 401){
        if(response.data.logout){
            navigate('/login');
        }
        else{
            window.alert(response.data.message)
        }
    }
    if(response.status === 403){
        alert(response.data.message);
    }
    if(response.status === 404){
        navigate(-1);
        console.log(response);
    }
}