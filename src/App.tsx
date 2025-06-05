import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeSCLayout from "@/layout/HomeSCLayout";
import SelectCompany from "./pages/SelectCompany";
import AddTokenNumber from "./pages/AddTokenNumber";
import BulkImportDeductor from "./pages/BulkImportDeductor";
import Status15GH from "./pages/Status15GH";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeSCLayout />}>
        <Route path="/selectCompany" index element={<SelectCompany />} />
        <Route path="/addTokenNumber" element={<AddTokenNumber />} />
        <Route path="/bulkImportDeductor" element={<BulkImportDeductor />} />
        <Route path="/15GHStatus" element={<Status15GH />} />
        <Route path="/processChallan" element={<SelectCompany />} />
        <Route path="/bulkPanVerification" element={<SelectCompany />} />
        <Route path="/utilities" element={<SelectCompany />} />
        <Route path="/calculator" element={<SelectCompany />} />
        <Route path="/tdsProcess" element={<SelectCompany />} />
        <Route path="/logs" element={<SelectCompany />} />
        <Route path="/setting" element={<SelectCompany />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
