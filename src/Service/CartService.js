import axios from "axios";
const BASE_URL = 'http://localhost:8085/Cart';

class CartService {

  addCart(data) {
    return axios.post(`${BASE_URL}/Insert`, data)
  }
  deleteContact(cartId) {
    return axios.delete(`${BASE_URL}/delete/${cartId}`);
  }
  getAllCart() {
    return axios.get(`${BASE_URL}/getAll`);
  }
  getCart(cartId) {
    return axios.get(`${BASE_URL}/getById/{cartId}`);
  }
  updateQuantity(cartId, Qty, total) {
    return axios.put(`${BASE_URL}/UpdateQunatity/${cartId}/${Qty}/${total}`);
  }
  deleteOrder() {
    return axios.delete(`${BASE_URL}/delete`)
}
}
export default new CartService();