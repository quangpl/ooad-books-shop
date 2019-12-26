import axios from "axios";
import { BACK_END_URL } from "../../utils/constant";
class BookTypeManagement {
  constructor(token = localStorage.getItem("token")) {
    this.token = token;
    this.request = axios.create({
      headers: { "x-token-admin": this.token }
    });
  }

  async add({ name, slug }) {
    await this.request.post(`${BACK_END_URL}/api/admin/book-type`, {
      name,
      slug
    });
    return true;
  }
  async getAll() {
    const res = await this.request.get(`${BACK_END_URL}/api/admin/book-type`);
    return res.data.book_types;
  }

  async getAllBookTypeDetail() {
    const res = await this.request.get(`${BACK_END_URL}/api/admin/book-type/detail`);
    return res.data.book_types;
  }

  async delete(id) {
    await this.request.post(`${BACK_END_URL}/api/admin/book-type/delete`, {
      id: id
    });
    return true;
  }

  async update({ id, name, slug }) {
       await this.request.post(
      `${BACK_END_URL}/api/admin/book-type/edit`,
      {
        id,
        name,
        slug
      }
    );
    return true;
  }
}
export default BookTypeManagement;
