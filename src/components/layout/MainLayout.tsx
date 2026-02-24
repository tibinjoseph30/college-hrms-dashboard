import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={sidebarOpen} onClose={()=> setSidebarOpen(false)} />
      <Header title={title} onMenuClick={()=> setSidebarOpen(true)} />
      <main className="xl:ml-(--sidebarWidth) mt-(--headerHeight) px-4 py-5">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
