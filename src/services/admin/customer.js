import axios from "axios";
import { BACK_END_URL } from "../../utils/constant";
class CustomerManagement {
  constructor(token = localStorage.getItem("token")) {
    this.token = token;
    this.request = axios.create({
      headers: { "x-token-admin": this.token }
    });
  }

  async getAll() {
    const res = await this.request.get(`${BACK_END_URL}/api/admin/customers`);
    return res.data.customers;
  }

  async getByToken() {
    const res = await this.request.post(
      `${BACK_END_URL}/api/client/customers/get`,{
        token: this.token
      }
    );
    return res.data.customer;
  }

  async delete(id) {
    const res = await this.request.post(
      `${BACK_END_URL}/api/admin/customer/delete`,
      {
        id: id
      }
    );
    return true;
  }

  async update({ id, name, password, phone, address, email }) {
    const res = await this.request.post(
      `${BACK_END_URL}/api/admin/customer/edit`,
      {
        id,
        name,
        password,
        phone,
        address,
        email
      }
    );
    return true;
  }
}
export default CustomerManagement;
