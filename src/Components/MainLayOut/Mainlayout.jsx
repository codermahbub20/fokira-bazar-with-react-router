import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";

const Mainlayout = () => {
    return (
        <div>
             <section>
          <Header></Header> 
            </section>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;