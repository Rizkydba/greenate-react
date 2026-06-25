const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8 lg:mb-12">
      <h2 className="font-baloo text-3xl md:text-5xl lg:text-7xl text-primary font-bold uppercase tracking-wide">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;