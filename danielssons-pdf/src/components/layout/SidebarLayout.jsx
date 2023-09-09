import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import Drawer from "./Drawer";
import Reports from "../../views/Reports";

const SidebarLayout = () => {
    return ( 
    <>
    <BrowserRouter>
    <Drawer>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/reports" element={<Reports />}/>
        </Routes>
    </Drawer>
    </BrowserRouter>
    </> 
    );
}
 
export default SidebarLayout;