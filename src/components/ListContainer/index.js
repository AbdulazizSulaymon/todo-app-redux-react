const ListContainer = ({ className, children, ...props }) => {
  return (
    <div
      className={`w-full sm:w-7/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 mt-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ListContainer;
