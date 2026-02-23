import {
  BookCheck,
  CircleDollarSign,
  LayoutPanelLeftIcon,
  Settings,
  UsersRound,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navMenus = [
  { label: "Dashboard", icon: LayoutPanelLeftIcon, url: "/" },
  { label: "Employees", icon: UsersRound, url: "/employees" },
  { label: "Attendance", icon: BookCheck, url: "/attendance" },
  { label: "Payroll", icon: CircleDollarSign, url: "/payroll" },
  { label: "Settings", icon: Settings, url: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="bg-white fixed left-0 top-0 w-(--sidebarWidth) min-h-full">
      <div className="h-(--headerHeight) px-4 border-b border-gray-100 flex items-center text-2xl font-semibold">
        <Link to="">HRMS</Link>
      </div>
      <nav className="px-4">
        <ul className="flex flex-col gap-3 mt-5">
          {navMenus.map((menu) => {
            const isActive = location.pathname === menu.url;
            const Icon = menu.icon;
            return (
              <li key={menu.url}>
                <Link
                  to={menu.url}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md text-gray-600 transition duration-200 ${isActive ? "bg-(--primaryColor) text-white" : "hover:text-(--primaryColor) hover:bg-gray-100"}`}
                >
                  <span>
                    <Icon size={18} />
                  </span>
                  {menu.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
