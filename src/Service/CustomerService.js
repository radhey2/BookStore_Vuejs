import axios from "axios";
const BASE_URL = 'http://localhost:8085/Customerdetail';

class CustomerService {
    addCustomer(data){
        return axios.post(`${BASE_URL}/addCustomer`, data)
      }
    
    getAllCustomer() {
        return axios.get(`${BASE_URL}/getAllCustomer`);
      }
}
export default new CustomerService();