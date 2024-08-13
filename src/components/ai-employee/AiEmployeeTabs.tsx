import { Tabs } from 'antd';

const AiEmployeeTabs = () => {
  const tabItems = [
    { label: 'All AI Employees', key: '1' },
    { label: 'Active', key: '2' },
    { label: 'On Hold', key: '3' },
  ];

  return <Tabs defaultActiveKey="1" items={tabItems} />;
};

export default AiEmployeeTabs;
