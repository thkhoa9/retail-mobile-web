import DefaultLayout from "../DefaultLayout";
import BarcodeScanner from "../page/BarcodeScanner";
import Home from "../page/Home";

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
        { 
            path: "/home", 
            element:<Home/>  ,
        },
      { 
        path: "/barcodeScanner", 
        element: <BarcodeScanner /> 
      },
      //    { path: "*", element: <Error404 /> },
    ],
  },
];
