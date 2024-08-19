import { ImportOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
interface Props {
  onNewAiClick: () => void;
  onImportClick: () => void; // Thêm props cho import
}
const ActionButtons = ({ onNewAiClick, onImportClick }: Props) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}
    >
      <Button style={{ marginRight: 8 }} icon={<ImportOutlined />} onClick={onImportClick}>
        Import
      </Button>
      <Button type="primary" icon={<PlusOutlined />} onClick={onNewAiClick}>
        New AI
      </Button>
    </div>
  );
};

export default ActionButtons;
