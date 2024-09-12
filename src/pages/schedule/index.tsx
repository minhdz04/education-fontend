import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Layout,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Alert,
  Spin,
  Dropdown,
  Menu,
  Select,
} from "antd";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import {
  CreateScheduleData,
  scheduleService,
} from "../../services/schedule-service/schedule.service"; // Correct import path
import { ScheduleData } from "../../services/schedule-service/schedule.service";
import StudentPage from "../student";
import ScheduleTabsMenu from "../../components/schedule/TabsMenu";

const { Option } = Select;

const ScheduleList: React.FC = () => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("1");
  const { classId } = useParams<{ classId: string }>();
  const [editingSchedule, setEditingSchedule] = useState<ScheduleData | null>(
    null,
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [shifts, setShifts] = useState<any[]>([]); // Replace with actual data type
  const [classrooms, setClassrooms] = useState<any[]>([]); // Replace with actual data type
  const [lecturers, setLecturers] = useState<any[]>([]); // Replace with actual data type
  const [subjects, setSubjects] = useState<any[]>([]); // Replace with actual data type

  // Fetch schedules
  const fetchSchedules = async () => {
    try {
      const data = await scheduleService.findByClassId(classId!);
      setSchedules(data);
    } catch (err) {
      console.error("Error fetching schedules:", err);
      setError("Failed to load schedules.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch additional data for select options
  const fetchOptions = async () => {
    try {
      // Replace with actual service methods to fetch options
      const [shiftData, classroomData, lecturerData, subjectData] =
        await Promise.all([
          scheduleService.getShifts(), // Modify according to your API
          scheduleService.getClassrooms(), // Modify according to your API
          scheduleService.getLecturers(), // Modify according to your API
          scheduleService.getSubjects(), // Modify according to your API
        ]);
      setShifts(shiftData);
      setClassrooms(classroomData);
      setLecturers(lecturerData);
      setSubjects(subjectData);
    } catch (err) {
      console.error("Error fetching options:", err);
      setError("Failed to load options.");
    }
  };

  useEffect(() => {
    fetchSchedules();
    fetchOptions();
    if (editingSchedule) {
      form.setFieldsValue(editingSchedule);
    } else {
      form.resetFields();
    }
  }, [editingSchedule]);

  const handleEdit = (schedule: ScheduleData) => {
    setEditingSchedule(schedule);
    setIsModalVisible(true);
  };

  const handleDelete = async (schedule: ScheduleData) => {
    try {
      await scheduleService.delete(schedule.id);
      fetchSchedules();
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  const menu = (schedule: ScheduleData) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handleEdit(schedule)}>
        Sửa
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleDelete(schedule)}>
        Xóa
      </Menu.Item>
    </Menu>
  );

  const handleFormSubmit = async (values: any) => {
    try {
      if (editingSchedule) {
        await scheduleService.update(editingSchedule.id, values);
        setEditingSchedule(null);
      } else {
        const request: CreateScheduleData = values;
        request.class = classId;
        await scheduleService.create(request);
      }
      setIsModalVisible(false);
      fetchSchedules();
    } catch (error) {
      console.error("Error saving schedule:", error);
    }
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
      key: "name",
      render: (name: string, record: ScheduleData) => (
        <Link to={`/class/schedule/attendance/${record.id}`}>{name}</Link>
      ),
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
      title: "Tên Tòa Nhà",
      dataIndex: ["classroom", "building","name"],
      key: "classroomBuilding",
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
    {
      title: "Actions",
      key: "actions",
      render: (_: any, schedule: ScheduleData) => (
        <Dropdown overlay={menu(schedule)}>
          <EllipsisOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
        </Dropdown>
      ),
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
      <ScheduleTabsMenu onTabChange={setActiveTab} />
      {activeTab === "1" ? (
        <Layout
          className="rounded-lg"
          style={{
            background: "white",
            padding: "20px",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              zIndex: 1,
            }}
          >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setEditingSchedule(null);
                setIsModalVisible(true);
              }}
            >
              Thêm lịch học
            </Button>
          </div>
          <div style={{ marginTop: "60px" }}>
            <Table columns={columns} dataSource={schedules} rowKey="id" />
          </div>
        </Layout>
      ) : (
        <StudentPage />
      )}

      <Modal
        title={editingSchedule ? "Chỉnh sửa lịch học" : "Thêm lịch học"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <Form
          form={form}
          onFinish={handleFormSubmit}
          layout="vertical"
          initialValues={editingSchedule || {}}
        >
          <Form.Item label="Ngày" name="date" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Tên Ca"
            name={["shift"]}
            rules={[{ required: true }]}
          >
            <Select>
              {shifts.map((shift) => (
                <Option key={shift.id} value={shift.id}>
                  {shift.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* <Form.Item
            label="Thời Gian Bắt Đầu Ca"
            name={["shift", "startTime"]}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Thời Gian Kết Thúc Ca"
            name={["shift", "endTime"]}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Tên Phòng Học"
            name={["classroom"]}
            rules={[{ required: true }]}
          >
            <Select>
              {classrooms.map((classroom) => (
                <Option key={classroom.id} value={classroom.id}>
                  {classroom.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        
          <Form.Item
            label="Giảng Viên"
            name={["lecturer"]}
            rules={[{ required: true }]}
          >
            <Select>
              {lecturers.map((lecturer) => (
                <Option key={lecturer.id} value={lecturer.id}>
                  {lecturer.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Môn học"
            name={["subject"]}
            rules={[{ required: true }]}
          >
            <Select>
              {subjects.map((subject) => (
                <Option key={subject.id} value={subject.id}>
                  {subject.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingSchedule ? "Cập nhật" : "Thêm"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScheduleList;
