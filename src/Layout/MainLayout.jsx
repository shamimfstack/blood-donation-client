import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;