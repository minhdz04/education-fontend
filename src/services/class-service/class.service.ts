// class.service.ts
import axiosInstance from "../../utils/axiosInstance";

export interface ClassData {
  id: number; // Thêm id vào ClassData
  title: string;
  position: string;
  totalStudent: number;
}

class ClassService {
  // Lấy danh sách các lớp học
  async getClasses(): Promise<ClassData[]> {
    try {
      const response = await axiosInstance.get<ClassData[]>("/classes");
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
      throw error;
    }
  }
}

export default new ClassService();
