import { Outlet } from "react-router";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
