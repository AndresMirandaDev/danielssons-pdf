import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import Drawer from "./Drawer";
import Reports from "../../views/reports/Reports";
import ReviewReports from "../../views/reports/ReviewReports";
import ReportDetails from "../../views/reports/ReportDetails";

const SidebarLayout = () => {
    return ( 
    <>
    <BrowserRouter>
    <Drawer>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/reports" element={<Reports />} />
            <Route path='/reports/review' element={<ReviewReports />}/>
            <Route path='/reportdetails'  element={<ReportDetails />}/>
        </Routes>
    </Drawer>
    </BrowserRouter>
    </> 
    );
}
 
export default SidebarLayout;