import type { TableProps } from "antd";
import { Button, Dropdown, Form, Input, Menu, Modal, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { userService } from "../../services/user-service/user.service";

interface DataType {
  key: string;
  username: string;
  email: string;
  role: string;
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<DataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editingUser, setEditingUser] = useState<DataType | null>(null);

  const roles = ['Admin', 'Teacher']; // Replace with your actual roles

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.findAll();
        const data = response.map((user) => ({
          key: user.id.toString(),
          username: user.username,
          email: user.email,
          role: user.role,
        }));
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (user: DataType) => {
    setEditingUser(user);
    editForm.setFieldsValue({ 
      username: user.username, 
      email: user.email,   
      role: user.role 
    });
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
      await userService.create(values);
      const updatedUsers = await userService.findAll();
      setUsers(
        updatedUsers.map((user) => ({
          key: user.id.toString(),
          username: user.username,
          email: user.email,      
          role: user.role,
        })),
      );
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const values = await editForm.validateFields();
      if (editingUser) {
        const userId = parseInt(editingUser.key, 10);
        await userService.update(userId, values);
        const updatedUsers = await userService.findAll();
        console.log("Updated users:", updatedUsers);
        setUsers(
          updatedUsers.map((user) => ({
            key: user.id.toString(),
            username: user.username,
            email: user.email,       
            role: user.role,
          })),
        );
        setIsEditModalVisible(false);
        editForm.resetFields();
      }
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleDelete = async (key: string) => {
    try {
      const userId = parseInt(key, 10);
      await userService.delete(userId);
      const updatedUsers = users.filter((user) => user.key !== key);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const menu = (user: DataType) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => showEditModal(user)}>
        Sửa
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => handleDelete(user.key)}>
        Xóa
      </Menu.Item>
    </Menu>
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "",
      key: "actions",
      render: (_, record) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button
            type="text"
            icon={<AiOutlineMore style={{ fontSize: "20px" }} />}
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
            Thêm người dùng
          </Button>
        </div>
        <Table pagination={false} columns={columns} dataSource={users} scroll={{ y: 400 }} />

        {/* Modal thêm người dùng */}
        <Modal
          title="Tạo mới người dùng"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Hủy
            </Button>,
            <Button key="create" type="primary" onClick={handleCreate}>
              Tạo
            </Button>,
          ]}
          centered
        >
          <Form form={form}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input the username!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input the email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input the password!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please select the role!" }]}
            >
              <Select>
                {roles.map((role) => (
                  <Select.Option key={role} value={role}>
                    {role}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>

        {/* Modal chỉnh sửa người dùng */}
        <Modal
          title="Sửa người dùng"
          visible={isEditModalVisible}
          onCancel={handleEditCancel}
          footer={[
            <Button key="cancel" onClick={handleEditCancel}>
              Hủy
            </Button>,
            <Button key="save" type="primary" onClick={handleEdit}>
              Lưu
            </Button>,
          ]}
          centered
        >
          <Form form={editForm}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input the username!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input the email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input the password!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please select the role!" }]}
            >
              <Select>
                {roles.map((role) => (
                  <Select.Option key={role} value={role}>
                    {role}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>            
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default UserPage;
