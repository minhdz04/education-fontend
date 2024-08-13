import {
  DollarCircleOutlined,
<<<<<<< HEAD
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
=======
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
>>>>>>> c87f549 (init project)
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const DashBoardPage = () => {
<<<<<<< HEAD
  return (
    <div>
      <Row gutter={16} className="mb-5" style={{ alignItems: "stretch" }}>
        {/* Today's Sales */}
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">Today's Sales</span>}
              value={53000}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
=======
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
>>>>>>> c87f549 (init project)
              prefix={<DollarCircleOutlined />}
              suffix="+30%"
            />
          </Card>
        </Col>

        {/* Today's Users */}
<<<<<<< HEAD
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">Today's Users</span>}
              value={3200}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
=======
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
>>>>>>> c87f549 (init project)
              prefix={<UserOutlined />}
              suffix="+20%"
            />
          </Card>
        </Col>

        {/* New Clients */}
<<<<<<< HEAD
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">New Clients</span>}
              value={1200}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
=======
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
>>>>>>> c87f549 (init project)
              prefix={<HeartOutlined />}
              suffix="-20%"
            />
          </Card>
        </Col>

        {/* New Orders */}
<<<<<<< HEAD
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">New Orders</span>}
              value={13200}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
=======
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
>>>>>>> c87f549 (init project)
              prefix={<ShoppingOutlined />}
              suffix="10%"
            />
          </Card>
        </Col>
      </Row>

<<<<<<< HEAD
      <Row gutter={16} className="mt-5">
        {/* Attendance Overview Chart */}
        <Col xs={24} sm={12}>
          <Card title="Attendance Overview" className="h-72 m-2">
=======
      <Row gutter={16} style={{ marginTop: "20px" }}>
        {/* Attendance Overview Chart */}
        <Col span={12}>
          <Card title="Attendance Overview" style={{ height: "300px" }}>
>>>>>>> c87f549 (init project)
            {/* Placeholder for attendance overview graph/chart */}
          </Card>
        </Col>

        {/* Student Attendance Distribution */}
<<<<<<< HEAD
        <Col xs={24} sm={12}>
          <Card title="Student Attendance Distribution" className="h-72 m-2">
=======
        <Col span={12}>
          <Card
            title="Student Attendance Distribution"
            style={{ height: "300px" }}
          >
>>>>>>> c87f549 (init project)
            {/* Placeholder for student attendance stats */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoardPage;
