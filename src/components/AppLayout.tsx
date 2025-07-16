
import { useState } from "react";
import { 
  MessageSquare, 
  Upload, 
  BarChart3, 
  Settings, 
  Bell,
  Menu,
  X,
  Brain,
  FileText,
  History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AppLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
}

const AppLayout = ({ children, activeTab = "chat" }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { id: "chat", name: "Chat AI", icon: MessageSquare, description: "Mulai percakapan" },
    { id: "documents", name: "Dokumen", icon: Upload, description: "Kelola knowledge base" },
    { id: "history", name: "Riwayat", icon: History, description: "Lihat percakapan lalu" },
    { id: "analytics", name: "Analytics", icon: BarChart3, description: "Dashboard metrik" },
    { id: "notifications", name: "Notifikasi", icon: Bell, description: "WhatsApp alerts" },
    { id: "settings", name: "Pengaturan", icon: Settings, description: "Konfigurasi sistem" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-20'} transition-all duration-300 bg-white border-r border-orange-100 shadow-lg`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center space-x-3 ${!sidebarOpen && 'justify-center'}`}>
              <Brain className="h-8 w-8 text-primary" />
              {sidebarOpen && (
                <span className="text-2xl font-bold text-gray-900">RAGMARUK</span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:text-primary"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <div key={item.id} className="group">
                <Button
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className={`w-full justify-start transition-all duration-200 ${
                    activeTab === item.id 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'text-gray-600 hover:text-primary hover:bg-orange-50'
                  } ${!sidebarOpen && 'justify-center px-2'}`}
                >
                  <item.icon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : ''}`} />
                  {sidebarOpen && (
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs opacity-70">{item.description}</div>
                    </div>
                  )}
                </Button>
              </div>
            ))}
          </nav>

          {/* Quick Actions */}
          {sidebarOpen && (
            <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-orange-100 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Quick Start</h3>
              <p className="text-sm text-gray-600 mb-3">
                Upload dokumen pertama Anda untuk memulai!
              </p>
              <Button size="sm" className="w-full btn-primary">
                <Upload className="h-4 w-4 mr-2" />
                Upload Dokumen
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-orange-100 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {navigation.find(nav => nav.id === activeTab)?.name || "Dashboard"}
              </h1>
              <p className="text-sm text-gray-600">
                {navigation.find(nav => nav.id === activeTab)?.description || "Selamat datang di RAGMARUK"}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Bell className="h-4 w-4 mr-2" />
                Notifikasi
              </Button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">Y</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
