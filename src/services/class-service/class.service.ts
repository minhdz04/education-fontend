// services/class/class.service.ts
import axiosInstance from "../../utils/axiosInstance";

export interface ClassData {
  id: number;
  title: string;
  position: string;
  totalStudent: number;
}

class ClassService {
  async getClasses(): Promise<ClassData[]> {
    try {
      const response = await axiosInstance.get<ClassData[]>("/classes");
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
      throw error;
    }
  }

  async updateClass(classId: string, classData: any): Promise<void> {
    try {
      await axiosInstance.patch(`/classes/${classId}`, classData);
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  }

  async deleteClass(classId: string): Promise<void> {
    try {
      await axiosInstance.delete(`/classes/${classId}`);
    } catch (error) {
      console.error("Error deleting class:", error);
      throw error;
    }
  }
}

export default new ClassService();
