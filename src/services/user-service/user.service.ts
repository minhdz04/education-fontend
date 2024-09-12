// src/services/userService.ts

import axiosInstance from "../../utils/axiosInstance";

export interface UserData {
   id: number;
   username: string;
   email: string;
   role: string; 
 }

class UserService {
  // Lấy danh sách người dùng
  async findAll(): Promise<UserData[]> {
    try {
      const response = await axiosInstance.get<UserData[]>("/user");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  // Lấy thông tin chi tiết một người dùng
  async findOne(username: string): Promise<UserData> {
    try {
      const response = await axiosInstance.get<UserData>(`/user/${username}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with username ${username}:`, error);
      throw error;
    }
  }

  // Thêm người dùng mới
  async create(user: UserData): Promise<UserData> {
    try {
      const response = await axiosInstance.post<UserData>("/user/createTeacher", user);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  // Cập nhật thông tin người dùng
  async update(id: number, user: Partial<UserData>): Promise<UserData> {
    try {
      const response = await axiosInstance.put<UserData>(`/user/${id}`, user);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error);
      throw error;
    }
  }

  // Xóa người dùng
  async delete(id: number): Promise<void> {
    try {
      await axiosInstance.delete(`/user/${id}`);
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      throw error;
    }
  }
}

export const userService = new UserService();
