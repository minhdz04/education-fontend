import { Alert, Layout, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScheduleTabsMenu from "../../components/schedule/TabsMenu";
import {
  ScheduleData,
  scheduleService,
} from "../../services/schedule-service/schedule.service";
import StudentPage from "../student";

const ScheduleList: React.FC = () => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([]); // Trạng thái để lưu danh sách lịch học
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái error
  const [activeTab, setActiveTab] = useState<string>("1"); // Trạng thái tab hiện tại
  const { classId } = useParams();

  // Hàm lấy danh sách lịch học
  const fetchSchedules = async () => {
    try {
      const data = await scheduleService.findByClassId(classId!); // Gọi service để lấy danh sách lịch học
      setSchedules(data);
    } catch (err) {
      console.error("Error fetching schedules:", err);
      setError("Failed to load schedules.");
    } finally {
      setLoading(false);
    }
  };

  // Hàm xử lý thay đổi tab
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    if (key === "1") {
      fetchSchedules();
    }
  };

  // Gọi hàm fetchSchedules khi component được mount
  useEffect(() => {
    fetchSchedules();
  }, []);

  // Menu chứa các hành động
  const handleEdit = (schedule: ScheduleData) => {
    console.log("Edit schedule:", schedule);
    // Thực hiện hành động sửa lịch học ở đây
  };

  const handleDelete = (schedule: ScheduleData) => {
    console.log("Delete schedule:", schedule);
    // Thực hiện hành động xóa lịch học ở đây
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tên Lớp",
      dataIndex: ["class", "name"],
      key: "className",
    },
    {
      title: "Tên Ca",
      dataIndex: ["shift", "name"],
      key: "shiftName",
    },
    {
      title: "Thời Gian Bắt Đầu Ca",
      dataIndex: ["shift", "startTime"],
      key: "shiftStartTime",
    },
    {
      title: "Thời Gian Kết Thúc Ca",
      dataIndex: ["shift", "endTime"],
      key: "shiftEndTime",
    },
    {
      title: "Tên Phòng Học",
      dataIndex: ["classroom", "name"],
      key: "classroomName",
    },
    {
      title: "Giảng Viên",
      dataIndex: ["lecturer", "name"],
      key: "lecturerName",
    },
    {
      title: "Môn học",
      dataIndex: ["subject", "name"],
      key: "subjectName",
    },
  ];

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
      <ScheduleTabsMenu onTabChange={handleTabChange} />
      {activeTab === "1" ? (
        <Layout
          className="rounded-lg flex justify-center items-center"
          style={{
            background: "white",
            padding: "20px",
            minHeight: "100vh", // Ensure the layout takes the full height of the screen
          }}
        >
          <Table columns={columns} dataSource={schedules} rowKey="id" />
        </Layout>
      ) : (
        <StudentPage />
      )}
    </div>
  );
};

export default ScheduleList;
