import { Outlet } from "react-router-dom";
import Nav from "../../components/Header/Nav/Nav";
// import Home from "../../Pages/Home/Home";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-5 py-8">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;