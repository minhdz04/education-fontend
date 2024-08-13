import { Table, Tag } from "antd";
import { useRef, useEffect, useState } from "react";

const AiEmployeeTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (tableRef.current) {
        const isScrollable =
          tableRef.current.scrollWidth > tableRef.current.clientWidth;
        setCanScroll(isScrollable);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const columns = [
    {
      title: "AI Name",
      dataIndex: "aiName",
      key: "aiName",
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Flow",
      dataIndex: "flow",
      key: "flow",
    },
    {
      title: "Context",
      dataIndex: "context",
      key: "context",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority: string) => {
        let color =
          priority === "High"
            ? "volcano"
            : priority === "Medium"
            ? "geekblue"
            : "green";
        return (
          <Tag color={color} key={priority}>
            {priority.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color =
          status === "In Progress"
            ? "blue"
            : status === "On Hold"
            ? "gray"
            : "";
        return (
          <div className="flex items-center gap-2">
            <div className=" flex items-center justify-center">
              <div
                key={status}
                style={{ background: color }}
                className="w-1 h-1 rounded-full"
              ></div>
            </div>
            <p style={{ whiteSpace: "nowrap" }}>{status}</p>
          </div>
        );
      },
    },
    {
      title: "Start date",
      dataIndex: "startDate",
      key: "startDate",
    },
  ];

  const data = [
    {
      key: "1",
      aiName: "AI Alpha",
      task: "Data Analysis",
      flow: "Automated Reports",
      context: "Finance",
      priority: "Medium",
      status: "In Progress",
      startDate: "10/2/2022",
    },
    {
      key: "2",
      aiName: "AI Beta",
      task: "Customer Support",
      flow: "Chatbot",
      context: "Retail",
      priority: "High",
      status: "On Hold",
      startDate: "11/14/2022",
    },
    {
      key: "3",
      aiName: "AI Gamma",
      task: "Predictive Maintenance",
      flow: "Equipment Monitoring",
      context: "Manufacturing",
      priority: "High",
      status: "On Hold",
      startDate: "2/2/2022",
    },
    {
      key: "4",
      aiName: "AI Delta",
      task: "Fraud Detection",
      flow: "Transaction Analysis",
      context: "Banking",
      priority: "Low",
      status: "In Progress",
      startDate: "3/2/2022",
    },
    {
      key: "5",
      aiName: "AI Epsilon",
      task: "Content Recommendation",
      flow: "User Interaction",
      context: "Entertainment",
      priority: "Medium",
      status: "In Progress",
      startDate: "4/12/2022",
    },
    {
      key: "6",
      aiName: "AI Zeta",
      task: "Market Research",
      flow: "Survey Analysis",
      context: "Market Research",
      priority: "Low",
      status: "In Progress",
      startDate: "11/3/2022",
    },
  ];

  return (
    <div
      ref={tableRef}
      className={`${
        canScroll ? "scrollbar-thin" : "scrollbar-none"
      } overflow-x-auto`}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
};

export default AiEmployeeTable;
