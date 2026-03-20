import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header";


function DefaultLayout() {

    return <>
            <Header />
            <main>
                <Outlet />
            </main>


    </>

}

export default DefaultLayout;