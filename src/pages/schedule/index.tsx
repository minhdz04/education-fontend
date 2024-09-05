import React, { useEffect, useState } from "react";
import { Table, Spin, Alert } from "antd";
import { ScheduleData, scheduleService } from "../../services/schedule-service/schedule.service";

const ScheduleList: React.FC = () => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([]); // Trạng thái để lưu danh sách lịch học
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái error

  // Cột bảng
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Ngày", dataIndex: "date", key: "date" },
    { title: "Môn học", dataIndex: ["subject", "name"], key: "subject" },
    { title: "Giảng viên", dataIndex: ["lecturer", "name"], key: "lecturer" },
    { title: "Ca học", dataIndex: ["shift", "time"], key: "shift" },
    { title: "Lớp học", dataIndex: ["classroom", "name"], key: "classroom" },
  ];

  // Hàm lấy danh sách lịch học
  const fetchSchedules = async () => {
    try {
      const data = await scheduleService.findAll(); // Gọi service để lấy danh sách lịch học
      setSchedules(data);
    } catch (err) {
      console.error("Error fetching schedules:", err);
      setError("Failed to load schedules.");
    } finally {
      setLoading(false);
    }
  };

  // Gọi hàm fetchSchedules khi component được mount
  useEffect(() => {
    fetchSchedules();
  }, []);

  // Render giao diện
  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Danh sách lịch học</h2>
      <Table columns={columns} dataSource={schedules} rowKey="id" />
    </div>
  );
};

export default ScheduleList;
