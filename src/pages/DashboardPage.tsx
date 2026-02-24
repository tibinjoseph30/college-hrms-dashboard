import EmployeeGrid from "../components/dashboard/employee-table/EmployeeGrid";
import Stats from "../components/dashboard/stats/Stats";
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
