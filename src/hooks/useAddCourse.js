import { useNavigate } from "react-router";

export const useAddCourse = () => {
  const navigate = useNavigate();

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const newCourse = {
      title: e.target.title.value,
      description: e.target.description.value,
      badge_text: e.target.badge_text.value,
      badge_color: e.target.badge_color.value,
      instructor_name: e.target.instructor.value,
    };

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please log in to add a course.");
      navigate("/login");
      return;
    }

    try {
      // Send data to the server
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newCourse),
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
        alert(responseData.status_message);
        e.target.reset();
      } else {
        alert("Error: " + responseData.status_message);
      }
    } catch (error) {
      console.error(error.message);
      alert("An error occurred: " + error.message);
    }
  };

  return { handleAddCourse };
};
