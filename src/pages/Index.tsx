
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { SchoolsList } from "@/components/SchoolsList";
import { TrainingStatus } from "@/components/TrainingStatus";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { Contacts } from "@/components/Contacts";
import { FollowUps } from "@/components/FollowUps";
import { SuccessfulImplementation } from "@/components/SuccessfulImplementation";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "schools":
        return <SchoolsList />;
      case "status":
        return <TrainingStatus />;
      case "implementation":
        return <ImplementationProcess />;
      case "contacts":
        return <Contacts />;
      case "followups":
        return <FollowUps />;
      case "success":
        return <SuccessfulImplementation />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar activeView={activeView} setActiveView={setActiveView} />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="animate-fade-in">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
