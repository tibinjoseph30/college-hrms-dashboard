import Input from "../ui/Input";

interface EmployeeFilterprops {
    value: string;
    onChange: (value:string)=> void;
}

const EmployeeFilter = ({value, onChange}: EmployeeFilterprops) => {
  return (
    <Input
      placeholder="Search by name or department"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-72"
    />
  );
};

export default EmployeeFilter;
