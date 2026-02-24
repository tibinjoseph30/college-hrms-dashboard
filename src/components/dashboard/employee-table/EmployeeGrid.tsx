import { useMemo, useState } from "react";
import { employeesData } from "../../../data/employees";
import Card from "../../ui/Card";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeRow from "./EmployeeRow";
import EmployeePagination from "./EmployeePagination";

const employeeHeadCols = [
  { key: "empId", label: "Employee ID" },
  { key: "empName", label: "Employee Name" },
  { key: "department", label: "Department" },
  { key: "designation", label: "Designation" },
  { key: "empStatus", label: "Status" },
];

const EmployeeGrid = () => {
  const [searchEmployee, setSearchEmployee] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 4;

  const filteredEmployees = useMemo(() => {
    return employeesData.filter(
      (emp) =>
        emp.empName
          .toLocaleLowerCase()
          .includes(searchEmployee.toLocaleLowerCase()) ||
        emp.department
          .toLocaleLowerCase()
          .includes(searchEmployee.toLocaleLowerCase()),
    );
  }, [searchEmployee]);

  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const firstIndex = (currentPage - 1) * rowsPerPage;
  const currentEmployees = filteredEmployees.slice(
    firstIndex,
    firstIndex + rowsPerPage,
  );

  return (
    <Card
      title="Employee Details"
      titleSize="lg"
      headerClassName="border-b border-gray-100"
      className="overflow-hidden"
    >
      <div className="mb-4 flex">
        <EmployeeFilter
          value={searchEmployee}
          onChange={(value: string) => {
            setSearchEmployee(value);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 rounded-md">
            <tr>
              {employeeHeadCols.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-2 font-semibold whitespace-nowrap first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md text-left uppercase text-sm text-gray-500"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((emp) => (
              <EmployeeRow key={emp.empId} {...emp} />
            ))}
          </tbody>
        </table>
      </div>
      <EmployeePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Card>
  );
};

export default EmployeeGrid;
