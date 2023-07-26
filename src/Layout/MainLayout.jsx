import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavBar from "../Components/Shared/Navbar/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto font-primary">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
