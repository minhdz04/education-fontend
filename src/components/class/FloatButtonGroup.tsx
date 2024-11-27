import { FileExcelOutlined, FormOutlined } from "@ant-design/icons";
import { FloatButton, notification, Tooltip } from "antd";
import { FaPlus } from "react-icons/fa";
import useModals from "../../hooks/useModal";
import ImportForm from "../shared/ImportForm";
import AddClassForm from "./AddClassForm";
import { uploadFile } from "../../services/upload-service/upload.service";
import { RcFile } from "antd/es/upload";

const FloatButtonGroup = () => {
  const handleUpload = async (file: RcFile) => {
    console.log(file.name);
    await uploadFile(file); // Đảm bảo `uploadFile` có thể nhận `RcFile`
    hideModal("importClassExcel"); // Đóng modal sau khi upload thành công
  };

  const handleAddClass = () => {
    notification.success({ message: "Add class successfully!" });
    hideModal("addClassModal");
  };
  const { showModal, hideModal, isVisible } = useModals(); // Sử dụng hook useModals
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<FaPlus />}
      >
        <Tooltip title="Import Excel" placement="left">
          <FloatButton
            icon={<FileExcelOutlined />}
            onClick={() => showModal("importClassExcel")}
          />
        </Tooltip>
        <Tooltip title="Add" placement="left">
          <FloatButton
            icon={<FormOutlined />}
            onClick={() => showModal("addClassModal")}
          />
        </Tooltip>
      </FloatButton.Group>

      {/* Sử dụng ImportForm component */}
      <ImportForm
        isModalVisible={isVisible("importClassExcel")}
        hideModal={() => hideModal("importClassExcel")}
        handleUpload={handleUpload}
      />

      <AddClassForm
        visible={isVisible("addClassModal")}
        onAdd={handleAddClass}
        onCancel={() => hideModal("addClassModal")}
      />
    </>
  );
};

export default FloatButtonGroup;