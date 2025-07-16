
import AppLayout from "./AppLayout";
import ChatInterface from "./ChatInterface";

const Dashboard = () => {
  return (
    <AppLayout activeTab="chat">
      <ChatInterface />
    </AppLayout>
  );
};

export default Dashboard;
