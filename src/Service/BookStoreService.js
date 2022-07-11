import axios from "axios";
const BASE_URL = 'http://localhost:8085/BookStore';

class BookStoreService {

  getAllBooks() {
    return axios.get(`${BASE_URL}/getAll`);
  }
  getBook(BookId) {
    return axios.get(`${BASE_URL}/getBy/${BookId}`);
  }
  getContactCount() {
    return axios.get(`${BASE_URL}/getcount`);
  }
  getsortBook() {
    return axios.put(`${BASE_URL}/sortascending`);
  }
  getsortBooks() {
    return axios.put(`${BASE_URL}/sortdescending`);
  }

}
export default new BookStoreService();