// class.service.ts
import axiosInstance from "../../utils/axiosInstance";

export interface ClassData {
  id: number; // Thêm id vào ClassData
  title: string;
  position: string;
  totalStudent: number;
}

class ClassService {
  async getClasses(): Promise<ClassData[]> {
    try {
      const response = await axiosInstance.get<ClassData[]>("/classes");
      console.log(response.data);
      if (!response.data) {
        throw new Error("No data returned from API");
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
      throw error;
    }
  }
}

export default new ClassService();




