interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const IconButton = ({ children, className = "", onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
