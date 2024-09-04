import { Col, Row } from "antd";
import ClassItem from "./ClassItem";

const ClassList = ({ classes }) => {
  return (
    <Row gutter={[16, 16]}>
      {classes.map((classItem, index) => (
        <Col
          key={index}
          xs={24} // Full width on extra-small screens
          sm={12} // Half width on small screens
          md={10} // One-third width on medium screens
          lg={8} // One-fourth width on large screens
          xl={6} // One-fifth width on extra-large screens
          xxl={5} // One-sixth width on extra-extra-large screens
        >
          <ClassItem
            classId={classItem.id}
            title={classItem.name}
            position={
              classItem.classroom.name + "-" + classItem.classroom.building.name
            }
            totalStudent={29} // need from api
          />
        </Col>
      ))}
    </Row>
  );
};

export default ClassList;
