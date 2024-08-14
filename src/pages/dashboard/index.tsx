import {
  DollarCircleOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const DashBoardPage = () => {
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
              prefix={<DollarCircleOutlined />}
              suffix="+30%"
            />
          </Card>
        </Col>

        {/* Today's Users */}
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">Today's Users</span>}
              value={3200}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
              prefix={<UserOutlined />}
              suffix="+20%"
            />
          </Card>
        </Col>

        {/* New Clients */}
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">New Clients</span>}
              value={1200}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
              prefix={<HeartOutlined />}
              suffix="-20%"
            />
          </Card>
        </Col>

        {/* New Orders */}
        <Col xs={24} sm={12} md={6}>
          <Card className="min-h-24 m-2 rounded-lg shadow-md bg-white">
            <Statistic
              title={<span className="text-sm">New Orders</span>}
              value={13200}
              precision={1}
              valueStyle={{ color: "#1890ff", fontSize: "1.5rem" }}
              prefix={<ShoppingOutlined />}
              suffix="10%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} className="mt-5">
        {/* Attendance Overview Chart */}
        <Col xs={24} sm={12}>
          <Card title="Attendance Overview" className="h-72 m-2">
            {/* Placeholder for attendance overview graph/chart */}
          </Card>
        </Col>

        {/* Student Attendance Distribution */}
        <Col xs={24} sm={12}>
          <Card title="Student Attendance Distribution" className="h-72 m-2">
            {/* Placeholder for student attendance stats */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoardPage;
