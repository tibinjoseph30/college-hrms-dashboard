import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <div>
      <Sidebar />
      <Header title={title} />
      <main className="ml-(--sidebarWidth) mt-(--headerHeight) px-4 py-5">{children}</main>
    </div>
  );
};

export default MainLayout;
