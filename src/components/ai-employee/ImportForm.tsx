import {
  UploadOutlined,
  CloseOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { Button, Modal, Upload, message, Spin, Row, Col } from "antd";
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
      closeIcon={false}
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
          <Row
            align="middle"
            justify="space-between"
            style={{
              border: "1px dashed #999999",
              borderRadius: 8, // Border radius để bo góc
              padding: 8, // Padding bên trong thẻ
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Col>
              <Row align="middle">
                <Col>
                  <FileExcelOutlined
                    style={{ fontSize: 28, color: "#28a745", margin: "0 12px" }}
                  />
                </Col>
                <Col>
                  <div style={{ textAlign: "left" }}>
                    <span
                      style={{
                        display: "block",
                        fontWeight: "bold",
                      }}
                    >
                      {fileName}
                    </span>
                    <span
                      style={{ display: "block", color: "#888", fontSize: 12 }}
                    >
                      Excel
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button
                icon={<CloseOutlined />}
                onClick={handleClear}
                type="text"
              />
            </Col>
          </Row>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {fileName && !loading && (
            <div>
              <Button onClick={hideModal} type="default" className="m-1">
                Close
              </Button>
              <Button onClick={handleUploadClick} type="primary">
                Upload
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ImportModal;
