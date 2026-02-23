import EmployeeGrid from "../components/dashboard/EmployeeGrid";
import Stats from "../components/dashboard/Stats";
import MainLayout from "../components/layout/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="grid gap-4">
        <Stats />
        <EmployeeGrid />
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
