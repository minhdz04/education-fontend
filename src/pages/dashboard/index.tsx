import {
  DollarCircleOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const DashBoardPage = () => {
  const cardStyle = {
    height: "100px", // Adjust the height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "8px", // Rounded corners
  };

  const lightBlueColor = "#1890ff";

  const valueFontSize = "24px"; // Adjust this for the value size
  const titleFontSize = "14px"; // Adjust this for the title size

  return (
    <div>
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        {/* Today's Sales */}
        <Col span={6}>
          <Card style={cardStyle}>
            <Statistic
              title={<span style={{ fontSize: titleFontSize }}>Today's Sales</span>}
              value={53000}
              precision={0}
              valueStyle={{
                color: lightBlueColor,
                fontSize: valueFontSize, // Adjusted font size
              }}
              prefix={<DollarCircleOutlined />}
              suffix="+30%"
            />
          </Card>
        </Col>

        {/* Today's Users */}
        <Col span={6}>
          <Card style={cardStyle}>
            <Statistic
              title={<span style={{ fontSize: titleFontSize }}>Today's Users</span>}
              value={3200}
              precision={0}
              valueStyle={{
                color: lightBlueColor,
                fontSize: valueFontSize, // Adjusted font size
              }}
              prefix={<UserOutlined />}
              suffix="+20%"
            />
          </Card>
        </Col>

        {/* New Clients */}
        <Col span={6}>
          <Card style={cardStyle}>
            <Statistic
              title={<span style={{ fontSize: titleFontSize }}>New Clients</span>}
              value={1200}
              precision={0}
              valueStyle={{
                color: lightBlueColor,
                fontSize: valueFontSize, // Adjusted font size
              }}
              prefix={<HeartOutlined />}
              suffix="-20%"
            />
          </Card>
        </Col>

        {/* New Orders */}
        <Col span={6}>
          <Card style={cardStyle}>
            <Statistic
              title={<span style={{ fontSize: titleFontSize }}>New Orders</span>}
              value={13200}
              precision={0}
              valueStyle={{
                color: lightBlueColor,
                fontSize: valueFontSize, // Adjusted font size
              }}
              prefix={<ShoppingOutlined />}
              suffix="10%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "20px" }}>
        {/* Attendance Overview Chart */}
        <Col span={12}>
          <Card title="Attendance Overview" style={{ height: "300px" }}>
            {/* Placeholder for attendance overview graph/chart */}
          </Card>
        </Col>

        {/* Student Attendance Distribution */}
        <Col span={12}>
          <Card
            title="Student Attendance Distribution"
            style={{ height: "300px" }}
          >
            {/* Placeholder for student attendance stats */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoardPage;
