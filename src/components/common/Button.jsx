const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-green-800 text-white hover:bg-green-700",

    secondary:
      "bg-white border border-green-800 text-green-800 hover:bg-green-50",
  };

  return (
    <button
      className={`rounded-full px-6 py-3 font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;