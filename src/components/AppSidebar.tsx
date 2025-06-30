
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Dashboard as DashboardIcon, 
  Users, 
  Activity, 
  FileText, 
  Contact, 
  Calendar,
  Trophy
} from "lucide-react";

interface AppSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const menuItems = [
  { id: "dashboard", title: "Dashboard", icon: DashboardIcon },
  { id: "schools", title: "Schools", icon: Users },
  { id: "status", title: "Training Status", icon: Activity },
  { id: "implementation", title: "Implementation", icon: FileText },
  { id: "contacts", title: "Contacts", icon: Contact },
  { id: "followups", title: "Follow-ups", icon: Calendar },
  { id: "success", title: "Success Stories", icon: Trophy },
];

export function AppSidebar({ activeView, setActiveView }: AppSidebarProps) {
  const { collapsed } = useSidebar();

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarContent className="bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CRM</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-semibold text-gray-900 text-sm">Training CRM</h1>
                <p className="text-xs text-gray-500">School Programs</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-gray-500 px-4 py-2">
            {!collapsed && "MAIN MENU"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg mx-2 transition-all duration-200 ${
                      activeView === item.id
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {!collapsed && <span className="font-medium">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <div className="p-2 border-t border-gray-200">
        <SidebarTrigger className="w-full" />
      </div>
    </Sidebar>
  );
}
