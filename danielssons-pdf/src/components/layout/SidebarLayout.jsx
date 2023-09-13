import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import Drawer from "./Drawer";
import Reports from "../../views/Reports";
import ReviewReports from "../../views/ReviewReports";

const SidebarLayout = () => {
    return ( 
    <>
    <BrowserRouter>
    <Drawer>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/reports" element={<Reports />} />
            <Route path='/reports/review' element={<ReviewReports />}/>
        </Routes>
    </Drawer>
    </BrowserRouter>
    </> 
    );
}
 
export default SidebarLayout;