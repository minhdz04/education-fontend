import React, { useEffect, useState } from "react";
import { Table, Spin, Alert, Dropdown, Menu, Button, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons"; // Import icon ba chấm
import { ScheduleData, scheduleService } from "../../services/schedule-service/schedule.service";

const ScheduleList: React.FC = () => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([]); // Trạng thái để lưu danh sách lịch học
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái error

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

  // Menu chứa các hành động
  const getMenu = (schedule: ScheduleData) => (
    <Menu>
      <Menu.Item key="edit">
        <Button type="text" onClick={() => handleEdit(schedule)}>
          Edit
        </Button>
      </Menu.Item>
      <Menu.Item key="delete">
        <Button type="text" onClick={() => handleDelete(schedule)}>
          Delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  // Xử lý khi nhấn nút Edit
  const handleEdit = (schedule: ScheduleData) => {
    console.log("Edit schedule:", schedule);
    // Thực hiện hành động sửa lịch học ở đây
  };

  // Xử lý khi nhấn nút Delete
  const handleDelete = (schedule: ScheduleData) => {
    console.log("Delete schedule:", schedule);
    // Thực hiện hành động xóa lịch học ở đây
  };

  // Cột bảng
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Ngày", dataIndex: "date", key: "date" },
    { title: "Môn học", dataIndex: ["subject", "name"], key: "subject" },
    { title: "Giảng viên", dataIndex: ["lecturer", "name"], key: "lecturer" },
    { title: "Ca học", dataIndex: ["shift", "time"], key: "shift" },
    { title: "Lớp học", dataIndex: ["classroom", "name"], key: "classroom" },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: ScheduleData) => (
        <Space size="middle"> {/* Sử dụng Space để sắp xếp các phần tử theo chiều ngang */}
          <Dropdown overlay={getMenu(record)} trigger={["click"]}>
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space>
      ),
    },
  ];

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
