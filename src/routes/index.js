// import DefaultLayout from "../DefaultLayout";
import BarcodeScanner from "../page/BarcodeScanner";
import Calendar from "../page/Calendar";
import Home from "../page/Home";
import Scan2InsertOrder from "../page/Scan2InsertOrder";

export const routes = [
  { path: "/", element: <Home/>},
  { path: "/barcodeScanner", element: <BarcodeScanner />},
  { path: "/scan2InsertOrder", element: <Scan2InsertOrder />},
  { path: "/calendar", element: <Calendar />},
  // {
  //   path: "/home",
  //   element: <DefaultLayout />,
  //   children: [
        
  //     { 
  //       path: "/barcodeScanner", 
  //       element: <BarcodeScanner /> 
  //     },
  //     //    { path: "*", element: <Error404 /> },
  //   ],
  // },
];
