const Container = ({ children, className = "" }) => {
  return (
    <div className={`px-6 sm:px-16 lg:px-32 ${className}`}>
      {children}
    </div>
  );
};

export default Container;