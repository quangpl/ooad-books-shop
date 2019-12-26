import axios from "axios";
import { BACK_END_URL } from "../../utils/constant";
class StaffManagement {
  constructor(token = localStorage.getItem("token")) {
    this.token = token;
    this.request = axios.create({
      headers: { "x-token-admin": this.token }
    });
  }

  async add({ username, password, fullName, phone, address, startAt }) {
    await this.request.post(`${BACK_END_URL}/api/admin/staff`, {
      username,
      password,
      fullName,
      phone,
      address,
      startAt : Date.now()
    });
    return true;
  }
  async getAll() {
    const res = await this.request.get(`${BACK_END_URL}/api/admin/staffs`);
    return res.data.staffs;
  }

  async delete(id) {
    const res = await this.request.post(
      `${BACK_END_URL}/api/admin/staff/delete`,
      {
        id: id
      }
    );
    return true;
  }

  async update({
    id,
    username,
    password,
    fullName,
    phone,
    address,
    employedTime
  }) {
    const res = await this.request.post(
      `${BACK_END_URL}/api/admin/staff/edit`,
      {
        id,
        username,
        password,
        fullName,
        phone,
        address,
        employedTime
      }
    );
    return true;
  }
}
export default StaffManagement;
