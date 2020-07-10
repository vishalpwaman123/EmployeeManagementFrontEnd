import AxiosServices from "axios";
import { toast } from 'react-toastify'
import Axios from "axios";
const URL = "http://localhost:3000/";


class EmployeeService{

    loginService (data){

        return AxiosServices.post('${URL}/login',data);

    }

    
        userRegistration(data){
            console.log("data in service ", data);
            toast.success("Registration SuccessFully",{
                    position: toast.POSITION.TOP_CENTER
            });
            return Axios.post("${URL}/registartion",data)
        }
}

export default EmployeeService;