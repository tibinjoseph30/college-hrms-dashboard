interface CardProps {
  title?: string;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  size?: "lg" | "xl";
  titleSize?: "md" | "lg";
}

const Card = ({
  title,
  children,
  headerClassName = "",
  bodyClassName = "",
  size = "lg",
  titleSize = "md",
}: CardProps) => {
  const sizeStyles = {
    lg: "px-6 py-4",
    xl: "px-8 py-6",
  };

  const titleStyles = {
    md: "text-base",
    lg: "text-xl",
  };

  return (
    <article className="bg-white rounded-2xl">
      {title && (
        <header className={`${sizeStyles[size]} ${headerClassName}`}>
          <h4 className={`font-semibold ${titleStyles[titleSize]}`}>{title}</h4>
        </header>
      )}
      <section className={`${sizeStyles[size]} ${bodyClassName}`}>
        {children}
      </section>
    </article>
  );
};

export default Card;
