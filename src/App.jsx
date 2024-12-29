import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import AddCourse from "./pages/AddCourse/AddCourse";
import CourseList from "./pages/CourseList/CourseList";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="course-list" element={<CourseList />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
