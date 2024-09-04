import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
interface Props {
  onNewAiClick: () => void;
  onImportClick: () => void; // Thêm props cho import
}
const ActionButtons = ({ onNewAiClick }: Props) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}
    >
      <Button type="primary" icon={<PlusOutlined />} onClick={onNewAiClick}>
        New Student
      </Button>
    </div>
  );
};

export default ActionButtons;
