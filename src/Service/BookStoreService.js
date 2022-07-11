import axios from "axios";
const BASE_URL = 'http://localhost:8085/book';

class BookStoreService {

  getAllBooks() {
    return axios.get(`${BASE_URL}/getAll`);
  }

  insertBook() {
    return axios.get(`${BASE_URL}/Insert`);
  }

}
export default new BookStoreService();