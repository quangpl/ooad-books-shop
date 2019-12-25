import axios from "axios";
import { BACK_END_URL } from "../utils/constant";
class Admin {
  constructor(token = localStorage.getItem("token")) {
    this.token = token;
    this.request = axios.create({
      headers: { "x-token-admin": this.token }
    });
  }

  async addBook({
    typeId,
    name,
    author,
    numberOf,
    unitPrice,
    publishBy,
    publishAt,
    image,
    importDate,
    description
  }) {
    const res = await this.request.post(`${BACK_END_URL}/api/admin/book`, {
      typeId,
      name,
      author,
      numberOf,
      unitPrice,
      publishBy,
      publishAt,
      image,
      importDate,
      description
    });
    return true;
  }
  async getBooks() {
    const res = await this.request.get(`${BACK_END_URL}/api/admin/books`);
    return res.data.books;
  }

  async deleteBooks(id) {
    const res = await this.request.post(
      `${BACK_END_URL}/api/admin/book/delete`,
      {
        id: id
      }
    );
    return true;
  }

  async updateBook({
    _id,
    typeId,
    name,
    author,
    numberOf,
    unitPrice,
    publishBy,
    image,
    description,
    publishAt,
    importDate
  }) {
    const res = await this.request.post(`${BACK_END_URL}/api/admin/book/edit`, {
      _id,
      typeId,
      name,
      author,
      numberOf,
      unitPrice,
      publishBy,
      image,
      description,
      publishAt,
      importDate
    });
    return true;
  }

  //   async login({ password, email }) {
  //     const res = await this.request.post(`${BACK_END_URL}/api/client/login`, {
  //       password,
  //       email
  //     });
  //     if (!res.data.error) {
  //       localStorage.setItem("token", res.data.token);
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  //   async auth() {
  //     const res = await this.request.get(`${BACK_END_URL}/api/client/auth`);
  //     return res.data;
  //   }
}
export default Admin;
