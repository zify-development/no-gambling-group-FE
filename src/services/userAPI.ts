import axios from "axios";
export interface IFUser {
  email: string;
  password: string;
  _id?: string;
  createdDate?: Date;
  blocked?: boolean;
}

export interface IFChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const getAll = {
  get: async (token: string) => {
    let res = await axios.get(`http://localhost:5000/api/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
};

export const getUserDataByToken = {
  getData: async (token: string) => {
    let res = await axios.get(`http://localhost:5000/api/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
};

export const createUser = {
  create: async (data: IFUser) => {
    const currentData = {
      email: data.email,
      password: data.password,
      createdDate: new Date(),
    };
    let res = await axios.post(
      `http://localhost:5000/api/user/register`,
      currentData
    );
    return res.data;
  },
};

export const loginUser = {
  login: async (data: IFUser) => {
    let res = await axios.post(`http://localhost:5000/api/user/login`, data);
    return res.data;
  },
};

export const updateUser = {
  update: async (data: IFUser, token: string) => {
    let res = await axios.put(`http://localhost:5000/api/user`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
};

export const updatePassword = {
  update: async (data: IFChangePassword, token: string) => {
    let res = await axios.put(
      `http://localhost:5000/api/user/changePassword`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  },
};
