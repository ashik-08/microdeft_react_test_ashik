import { useNavigate } from "react-router";

export const useAuthDataSubmit = (url) => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send data to the server
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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
        // Save token for later use
        localStorage.setItem("authToken", responseData.data.token);
        navigate("/");
      } else if (
        responseData.status === false &&
        responseData.status_class === "success" &&
        responseData.status_code === 460
      ) {
        alert("Email is not registered. Please register first.");
      } else {
        alert("Error: " + responseData.status_message);
      }
    } catch (error) {
      console.error(error.message);
      alert("An error occurred: " + error.message);
    }
  };

  return { onSubmit };
};
