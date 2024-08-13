import {
  UploadOutlined,
  CloseOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { Button, Modal, Upload, message, Spin } from "antd";
import { useState } from "react";

interface ImportModalProps {
  isModalVisible: boolean;
  hideModal: () => void;
}

const ImportModal = ({ isModalVisible, hideModal }: ImportModalProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Hàm xử lý khi file được chọn
  const handleChange = (info: any) => {
    if (info.file && info.file.name) {
      setFileName(shortenFileName(info.file.name));
    }
  };

  // Hàm xử lý upload file
  const handleUpload = (file: any) => {
    setLoading(true);
    // Logic để xử lý file upload
    setTimeout(() => {
      // Giả lập thời gian xử lý file nặng
      console.log(file);
      setLoading(false);
      message.success("File uploaded successfully");
    }, 2000);
    return false; // Ngăn không cho upload file tự động
  };

  // Hàm xử lý khi người dùng nhấn nút Clear
  const handleClear = () => {
    setFileName(null);
  };

  // Hàm xử lý upload file sau khi chọn
  const handleUploadClick = () => {
    setLoading(true);
    setTimeout(() => {
      // Giả lập thời gian xử lý file nặng
      setLoading(false);
      message.success("File uploaded successfully");
      setFileName(null);
    }, 2000);
  };

  // Hàm rút ngắn tên file
  const shortenFileName = (name: string) => {
    const maxLength = 20; // Độ dài tối đa của tên file
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <Modal
      title="Import Excel File"
      open={isModalVisible}
      onCancel={hideModal}
      footer={null}
    >
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {loading ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin tip="Uploading..." />
          </div>
        ) : !fileName ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Upload
              customRequest={({ file }) => handleUpload(file)}
              showUploadList={false}
              onChange={handleChange}
              accept=".xls,.xlsx" // Chỉ cho phép chọn file Excel
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        ) : (
          <div
            style={{
              border: "2px dashed  #999999",
              borderRadius: 8, // Border radius để bo góc
              padding: 8, // Padding bên trong thẻ
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <FileExcelOutlined
              style={{ fontSize: 28, marginBottom: 8, color: "#28a745" }}
            />
            <span
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {fileName}
            </span>
            <span style={{ display: "block", color: "#888", fontSize: 12 }}>
              Excel
            </span>
            <Button
              icon={<CloseOutlined />}
              onClick={handleClear}
              type="text"
              style={{ marginTop: 8 }}
            />
          </div>
        )}
        {fileName && !loading && (
          <Button onClick={handleUploadClick} type="primary">
            Upload
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ImportModal;
