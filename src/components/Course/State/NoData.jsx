const NoData = () => {
  return (
    <div className="col-span-full">
      <div className="text-center p-10 max-w-3xl mx-auto border border-yellow-300 rounded-lg bg-yellow-100 text-yellow-500">
        <h2 className="text-2xl font-semibold mb-3">No Courses Available</h2>
        <p className="text-lg font-medium">
          It looks like there are no courses available at the moment. Please add
          a course to the system first to view them here. Thank you!
        </p>
      </div>
    </div>
  );
};

export default NoData;
