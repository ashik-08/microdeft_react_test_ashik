const LoadingSpinner = () => {
  return (
    <div className="col-span-full flex justify-center items-center pt-[5%]">
      <div className="w-16 h-16 border-4 border-dashed border-primary-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
