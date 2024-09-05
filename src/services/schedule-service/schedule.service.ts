import axiosInstance from "../../utils/axiosInstance";

// Interface cho dữ liệu lịch học
export interface ScheduleData {
  id: number;
  date: string;
  class: any; // Cập nhật theo kiểu dữ liệu thực tế
  shift: any;  // Cập nhật theo kiểu dữ liệu thực tế
  lecturer: any; // Cập nhật theo kiểu dữ liệu thực tế
  subject: any; // Cập nhật theo kiểu dữ liệu thực tế
  classroom: any; // Cập nhật theo kiểu dữ liệu thực tế
}

class ScheduleService {
  // Lấy danh sách lịch học
  async findAll(): Promise<ScheduleData[]> {
    try {
      const response = await axiosInstance.get<ScheduleData[]>("/schedule");
      return response.data;
    } catch (error) {
      console.error("Error fetching schedules:", error);
      throw error;
    }
  }

  // Lấy thông tin chi tiết một lịch học
  async findOne(id: number): Promise<ScheduleData> {
    try {
      const response = await axiosInstance.get<ScheduleData>(`/schedule/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching schedule with id ${id}:`, error);
      throw error;
    }
  }

  // Thêm lịch học mới
  async create(schedule: ScheduleData): Promise<ScheduleData> {
    try {
      const response = await axiosInstance.post<ScheduleData>(
        "/schedule",
        schedule,
      );
      return response.data;
    } catch (error) {
      console.error("Error creating schedule:", error);
      throw error;
    }
  }

  // Cập nhật thông tin lịch học
  async update(
    id: number,
    schedule: Partial<ScheduleData>,
  ): Promise<ScheduleData> {
    try {
      const response = await axiosInstance.patch<ScheduleData>(
        `/schedule/${id}`,
        schedule,
      );

      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error updating schedule with id ${id}:`, error);
      throw error;
    }
  }

  // Xóa lịch học
  async delete(id: number): Promise<void> {
    try {
      await axiosInstance.delete(`/schedule/${id}`);
    } catch (error) {
      console.error(`Error deleting schedule with id ${id}:`, error);
      throw error;
    }
  }

  // Lấy số lượng lịch học theo ngày trong tháng
  async getScheduleCountByDayInMonth(date: string): Promise<{ day: number; count: number }[]> {
    try {
      const response = await axiosInstance.get<{ day: number; count: number }[]>(
        `/schedule/count-by-day`,
        { params: { date } },
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching schedule count by day in month for date ${date}:`, error);
      throw error;
    }
  }
}

export const scheduleService = new ScheduleService();
