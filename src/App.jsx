import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Register from "./pages/Register/Register";
// import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="add-course" element={<AddCourse />} /> */}
        {/* <Route path="course-list" element={<CourseList />} /> */}
      </Route>
      <Route path="*" element={<ErrorPage />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
