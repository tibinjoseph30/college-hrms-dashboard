import type { employeeTypes } from "../../types/types";

const EmployeeRow = ({
  empId,
  empName,
  department,
  designation,
  empStatus,
}: employeeTypes) => {
  const rowData = { empId, empName, department, designation, empStatus };
  return (
    <tr className="border-b border-gray-200 last:border-b-0">
      {Object.entries(rowData).map(([key, value]) => (
        <td key={key} className="px-6 py-4 text-sm">
          {key === "empStatus" ? (
            <span
              className={`px-3 py-1 rounded-full text-xs min-w-22 inline-flex justify-center ${value === "Active" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
            >
              {value}
            </span>
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  );
};

export default EmployeeRow;
