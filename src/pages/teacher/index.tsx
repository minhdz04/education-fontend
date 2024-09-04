import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input, Dropdown, Menu } from "antd";
import type { TableProps } from "antd";
import { teacherService } from "../../services/teacher-service/teacher.service";
import { FaPlus } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";

interface DataType {
  key: string;
  name: string;
}

const TeacherPage: React.FC = () => {
  const [teachers, setTeachers] = useState<DataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editingTeacher, setEditingTeacher] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await teacherService.findAll();
        const data = response.map((teacher) => ({
          key: teacher.id.toString(),
          name: teacher.name,
        }));
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (teacher: DataType) => {
    setEditingTeacher(teacher);
    editForm.setFieldsValue({ name: teacher.name });
    setIsEditModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
    editForm.resetFields();
  };

  const handleCreate = async () => {
    try {
      const values = await form.validateFields();
      await teacherService.create(values);
      const updatedTeachers = await teacherService.findAll();
      setTeachers(
        updatedTeachers.map((teacher) => ({
          key: teacher.id.toString(),
          name: teacher.name,
        })),
      );
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("Error creating teacher:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const values = await editForm.validateFields();
      console.log(values);
      if (editingTeacher) {
        const teacherId = parseInt(editingTeacher.key, 10); // Chuyển đổi key thành số
        console.log("Editing teacher ID:", teacherId); // Thêm log để kiểm tra ID
        console.log("New name:", values.name); // Thêm log để kiểm tra tên mới
        await teacherService.update(teacherId, { name: values.name }); // Gọi update với đúng dữ liệu
        const updatedTeachers = await teacherService.findAll();
        console.log("Updated teachers:", updatedTeachers); // Thêm log để kiểm tra dữ liệu mới
        setTeachers(
          updatedTeachers.map((teacher) => ({
            key: teacher.id.toString(),
            name: teacher.name,
          })),
        );
        setIsEditModalVisible(false);
        editForm.resetFields();
      }
    } catch (error) {
      console.error("Error editing teacher:", error);
    }
  };

  const handleDelete = async (key: string) => {
    try {
      const teacherId = parseInt(key, 10); // Chuyển đổi key thành số
      await teacherService.delete(teacherId);
      // Xóa giáo viên khỏi danh sách
      const updatedTeachers = teachers.filter((teacher) => teacher.key !== key);
      setTeachers(updatedTeachers);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const menu = (teacher: DataType) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => showEditModal(teacher)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => handleDelete(teacher.key)}>
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      key: "actions",
      render: (_, record) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button
            type="text"
            icon={<AiOutlineMore style={{ fontSize: "20px" }} />} // Thay đổi kích thước icon ở đây
            style={{ float: "right" }}
          />
        </Dropdown>
      ),
    },    
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "16px",
          }}
        >
          <Button
            icon={<FaPlus style={{ fontSize: "15px", color: "white" }} />}
            type="primary"
            style={{
              backgroundColor: "blue",
              borderColor: "blue",
            }}
            onClick={showModal}
          >
            New Teacher
          </Button>
        </div>
        <Table pagination={false} columns={columns} dataSource={teachers} scroll={{ y: 400 }} // Thiết lập chiều cao tối đa cho bảng
   />


        {/* Modal thêm giáo viên */}
        <Modal
          title="Create New Teacher"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="create" type="primary" onClick={handleCreate}>
              Create
            </Button>,
          ]}
          centered
        >
          <Form form={form}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input the teacher's name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>

        {/* Modal chỉnh sửa giáo viên */}
        <Modal
          title="Edit Teacher"
          visible={isEditModalVisible}
          onCancel={handleEditCancel}
          footer={[
            <Button key="cancel" onClick={handleEditCancel}>
              Cancel
            </Button>,
            <Button key="create" type="primary" onClick={handleEdit}>
              Save
            </Button>,
          ]}
          centered
        >
          <Form form={editForm}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input the teacher's name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default TeacherPage;
