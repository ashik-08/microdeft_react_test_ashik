import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CourseCard from "../../components/Course/CourseCard/CourseCard";
import ErrorState from "../../components/Course/State/ErrorState";
import LoadingSpinner from "../../components/Course/State/Loading";
import NoData from "../../components/Course/State/NoData";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        alert("Please log in to view your courses.");
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

        const responseData = await response.json();

        if (
          responseData.status === true &&
          responseData.status_class === "success" &&
          responseData.status_code === 200
        ) {
          setCourses(responseData?.data?.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  return (
    <section className="text-dark px-4 max-w-screen-xl mx-auto md:px-10 mt-5">
      <h1 className="text-center font-medium text-3xl lg:text-4xl mb-8">
        Added Course List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <LoadingSpinner />}
        {error && <ErrorState>{error}</ErrorState>}
        {!loading && !error && courses?.length === 0 && <NoData />}
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
