import { Outlet } from "react-router-dom";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="border-x border-white relative">
            <Nav />
            <Outlet />
            <Footer />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root;