import { Layout } from "antd";
import ActionButtons from "../../components/ai-employee/ActionButtons";
import AiEmployeeTable from "../../components/ai-employee/AiEmployeeTable";
import AiEmployeeTabs from "../../components/ai-employee/AiEmployeeTabs";
import CreateAiEmplForm from "../../components/ai-employee/CreateAiEmpForm";
import ImportModal from "../../components/ai-employee/ImportForm";
import useModal from "../../hooks/useModal";

const AiEmployeePage = () => {
  const { isVisible, showModal, hideModal } = useModal();

  return (
    <Layout
      className="rounded-lg"
      style={{
        background: "white",
        padding: "20px",
      }}
    >
      <div className="flex justify-between flex-wrap">
        <AiEmployeeTabs />
        <ActionButtons
          onNewAiClick={() => showModal("createAiEmployee")}
          onImportClick={() => showModal("importExcel")}
        />
      </div>
      <CreateAiEmplForm
        isModalVisible={isVisible("createAiEmployee")}
        hideModal={() => hideModal("createAiEmployee")}
      />
      <ImportModal
        isModalVisible={isVisible("importExcel")}
        hideModal={() => hideModal("importExcel")}
      />
      <AiEmployeeTable />
    </Layout>
  );
};
export default AiEmployeePage;
