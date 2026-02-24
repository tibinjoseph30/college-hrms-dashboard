import type { employeeTypes } from "../../../types/types";

const columns: (keyof employeeTypes)[] = [
  "empId",
  "empName",
  "department",
  "designation",
  "empStatus",
];

const EmployeeRow = (props: employeeTypes) => {
  return (
    <tr className="border-b border-gray-200 last:border-b-0">
      {columns.map((key) => (
        <td key={key} className="px-6 py-4 text-sm">
          {key === "empStatus" ? (
            <span
              className={`px-3 py-1 rounded-full text-xs min-w-22 inline-flex justify-center ${props.empStatus === "Active" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
            >
              {props.empStatus}
            </span>
          ) : (
            props[key]
          )}
        </td>
      ))}
    </tr>
  );
};

export default EmployeeRow;
