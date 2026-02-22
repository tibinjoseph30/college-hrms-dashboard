import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
