import { Bell, Menu } from "lucide-react";
import avatar from "../../assets/avatar.jpg";
import IconButton from "../ui/IconButton";

interface HeaderProps {
  title?: string;
  onMenuClick: ()=> void;
}

const Header = ({ title, onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white w-full fixed top-0 xl:left-(--sidebarWidth) h-(--headerHeight) xl:max-w-[calc(100%-var(--sidebarWidth))] border-b border-gray-100 flex justify-between items-center px-4">
      <div className="flex gap-4">
        <button className="xl:hidden" onClick={onMenuClick}>
          <Menu />
        </button>
        <h1>{title}</h1>
      </div>
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
