import axios from "axios"
import {BACK_END_URL} from "../utils/constant"
class Customer {
  constructor(token = localStorage.getItem("token")) {
    this.token = token;
    this.request = axios.create({
      headers: { "x-token": this.token }
    });
  }

  async register({ name, password, email, address, phone }) {
    await this.request.post(`${BACK_END_URL}/api/client/register`, {
      name,
      password,
      email,
      address,
      phone
    });
    return true;
  }

  async login({ password, email }) {
    const res = await this.request.post(`${BACK_END_URL}/api/client/login`, {
      password,
      email
    });
    if (!res.data.error) {
      localStorage.setItem("token", res.data.token);
      return true;
    } else {
      return false;
    }
  }

  async auth() {
    const res = await this.request.get(`${BACK_END_URL}/api/client/auth`);
    return res.data;
  }

  async getBooks() {
    const res = await this.request.get(`${BACK_END_URL}/api/client/books`);
    return res.data.books;
  }

  async getBooksSale() {
    const res = await this.request.get(
      `${BACK_END_URL}/api/client/books/hot-sale`
    );
    return res.data.books;
  }
  async getById(id) {
    const res = await this.request.get(
      `${BACK_END_URL}/api/client/books/${id}`
    );
    return res.data.book;
  }
}
export default Customer;