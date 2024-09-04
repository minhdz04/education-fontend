import axiosInstance from "../../utils/axiosInstance";

// Interface cho dữ liệu giáo viên
export interface TeacherData {
  id: number;
  name: string;
}

class TeacherService {
  // Lấy danh sách giáo viên
  async findAll(): Promise<TeacherData[]> {
    try {
      const response = await axiosInstance.get<TeacherData[]>("/lecturer");
      return response.data;
    } catch (error) {
      console.error("Error fetching teachers:", error);
      throw error;
    }
  }

  // Lấy thông tin chi tiết một giáo viên
  async findOne(id: number): Promise<TeacherData> {
    try {
      const response = await axiosInstance.get<TeacherData>(`/lecturer/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching teacher with id ${id}:`, error);
      throw error;
    }
  }

  // Thêm giáo viên mới
  async create(teacher: TeacherData): Promise<TeacherData> {
    try {
      const response = await axiosInstance.post<TeacherData>(
        "/lecturer",
        teacher,
      );
      return response.data;
    } catch (error) {
      console.error("Error creating teacher:", error);
      throw error;
    }
  }

  // Cập nhật thông tin giáo viên
  async update(
    id: number,
    teacher: Partial<TeacherData>,
  ): Promise<TeacherData> {
    try {
      // Gửi yêu cầu PUT để cập nhật giáo viên
      const response = await axiosInstance.patch<TeacherData>(
        `/lecturer/${id}`,
        teacher,
      );
  
      // Kiểm tra xem phản hồi có chứa dữ liệu cần thiết không
      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      // In lỗi để kiểm tra khi có lỗi xảy ra
      console.error(`Error updating teacher with id ${id}:`, error);
      throw error; // Ném lỗi lên để xử lý ở nơi gọi hàm
    }
  }
  

  // Xóa giáo viên
  async delete(id: number): Promise<void> {
    try {
      await axiosInstance.delete(`/lecturer/${id}`);
    } catch (error) {
      console.error(`Error deleting teacher with id ${id}:`, error);
      throw error;
    }
  }
}

export const teacherService = new TeacherService();
