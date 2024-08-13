import { Form, Input, Modal, Select } from "antd";
interface Props {
  isModalVisible: boolean | undefined;
  hideModal: () => void;
}
const CreateAiEmplForm = ({ isModalVisible, hideModal }: Props) => {
  const [form] = Form.useForm();

  // Xử lý khi nhấn nút "OK"
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Xử lý dữ liệu form (ví dụ: gửi dữ liệu lên server)
        console.log("Form data: ", values);

        // Reset form và đóng modal
        form.resetFields();
        hideModal();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Create New AI"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={hideModal}
      okText="Create"
      cancelText="Cancel"
      centered 
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="aiName"
          label="AI Name"
          rules={[{ required: true, message: "Please input the AI name!" }]}
        >
          <Input placeholder="Enter AI Name" />
        </Form.Item>

        <Form.Item
          name="task"
          label="Task"
          rules={[{ required: true, message: "Please input the AI task!" }]}
        >
          <Input placeholder="Enter AI Task" />
        </Form.Item>

        <Form.Item
          name="flow"
          label="Flow"
          rules={[{ required: true, message: "Please input the AI flow!" }]}
        >
          <Input placeholder="Enter AI Flow" />
        </Form.Item>

        <Form.Item
          name="context"
          label="Context"
          rules={[{ required: true, message: "Please input the AI context!" }]}
        >
          <Input placeholder="Enter AI Context" />
        </Form.Item>

        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: "Please select a priority!" }]}
        >
          <Select placeholder="Select priority">
            <Select.Option value="High">High</Select.Option>
            <Select.Option value="Medium">Medium</Select.Option>
            <Select.Option value="Low">Low</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateAiEmplForm;
