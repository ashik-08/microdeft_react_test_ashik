import { useAddCourse } from "../../hooks/useAddCourse";

const AddCourse = () => {
  const { handleAddCourse } = useAddCourse();

  return (
    <section className="px-4 max-w-screen-xl mx-auto md:px-10 mt-5 md:mt-5">
      <div className="bg-white text-dark px-4 md:px-10 lg:px-20 py-10 shadow-lg rounded-lg">
        <h1 className="text-center font-medium text-3xl lg:text-4xl mb-6">
          Add New Course
        </h1>
        <p className="text-center text-gray-500 mb-8 px-3 md:px-16">
          You can add a new course with its detailed descriptions by filling up
          the form below. Please make sure to fill up all the fields. Thank you!
        </p>
        <form
          onSubmit={handleAddCourse}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
        >
          <div className="space-y-2">
            <label className="text-lg font-medium">Title</label>
            <input
              className="w-full p-2.5 rounded-md border border-gray-300 focus:outline-primary-600"
              type="text"
              name="title"
              placeholder="Enter course title"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Instructor Name</label>
            <input
              className="w-full p-2.5 rounded-md border border-gray-300 focus:outline-primary-600"
              type="text"
              name="instructor"
              placeholder="Enter instructor name"
              required
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-lg font-medium">Description</label>
            <textarea
              className="w-full p-2.5 rounded-md border border-gray-300 focus:outline-primary-600"
              name="description"
              placeholder="Enter course description"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Badge Text</label>
            <input
              className="w-full p-2.5 rounded-md border border-gray-300 focus:outline-primary-600"
              type="text"
              name="badge_text"
              placeholder="Enter badge text"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Badge Color</label>
            <input
              className="w-full p-2.5 rounded-md border border-gray-300 focus:outline-primary-600"
              type="text"
              name="badge_color"
              placeholder="Enter badge color"
              required
            />
          </div>
          <div className="md:col-span-2 mx-auto mt-3">
            <button
              type="submit"
              className="bg-primary-600 text-white text-lg font-medium px-4 py-2 rounded-md"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCourse;
