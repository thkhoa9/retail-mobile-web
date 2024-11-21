// import DefaultLayout from "../DefaultLayout";
import BarcodeScanner from "../page/BarcodeScanner";
import Calendar from "../page/Calendar";
import Home from "../page/Home";

export const routes = [
  { path: "/", element: <Home/>},
  { path: "/barcodeScanner", element: <BarcodeScanner />},
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
