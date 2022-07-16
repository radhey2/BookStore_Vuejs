import axios from "axios";
const BASE_URL = 'http://localhost:8085/book';

class BookStoreService {

  getAllBooks() {
    return axios.get(`${BASE_URL}/getAll`);
  }

  insertBook() {
    return axios.get(`${BASE_URL}/Insert`);
  }

  getContactCount() {
    return axios.get(`${BASE_URL}/getcount`);
  }

}
export default new BookStoreService();