import axios from "axios";
import { BACK_END_URL } from "../../utils/constant";
class BillManagement {
  constructor(token = localStorage.getItem("token")) {
    this.token = token;
    this.request = axios.create({
      headers: { "x-token-admin": this.token }
    });
  }

  async add(
    customerId,
    employeeId,
    books,
  ) {
    await this.request.post(`${BACK_END_URL}/api/admin/bill`, {
      customerId,
      employeeId,
      books
    });
    return true;
  }
  async getAll() {
    const res = await this.request.get(`${BACK_END_URL}/api/admin/bills`);
    return res.data.bills;
  }

  async delete(id) {
    const res = await this.request.post(
      `${BACK_END_URL}/api/admin/bill/delete`,
      {
        id: id
      }
    );
    return true;
  }

  async update({
   id,
    customerId,
    employeeId,
    value
  }) {
    const res = await this.request.post(`${BACK_END_URL}/api/admin/bill/edit`, {
      id,
      customerId,
      employeeId,
      value
    });
    return true;
  }
}
export default BillManagement;
