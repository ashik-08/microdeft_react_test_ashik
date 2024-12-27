import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-193px)] sm:min-h-[calc(100vh-184px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
