import { Bell } from "lucide-react";
import avatar from "../../assets/avatar.jpg";
import IconButton from "../ui/IconButton";

interface HeaderProps {
    title?: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <header className="bg-white w-full fixed top-0 left-(--sidebarWidth) h-(--headerHeight) max-w-[calc(100%-var(--sidebarWidth))] border-b border-gray-100 flex justify-between items-center px-4">
      <h1>{title}</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <IconButton className="hover:bg-gray-100 hover:text-(--primaryColor)">
              <Bell />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-md object-cover"
              />
            </IconButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
