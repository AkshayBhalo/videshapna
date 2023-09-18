import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./customer/Pages/Home";
import Login from "./customer/Pages/Login";
import SignUp from "./customer/Pages/SignUp";
import Error from "./customer/Pages/Error";
import ForgotPassword from "./customer/Pages/ForgotPassword";
import Contact from "./customer/Pages/Contact";
import Blogs from "./customer/Pages/Blogs";
import BlogsDetails from "./customer/Pages/BlogsDetails";
import InformationHub from "./customer/Pages/InformationHub";
import ServicesOverview from "./customer/Pages/ServicesOverview";
import PlatformOverview from "./customer/Pages/PlatformOverview";
import Assessment from "./customer/Pages/Assessment";
import Scoring from "./customer/Pages/Scoring";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/blog",
    element: <Blogs />,
    errorElement: <Error />,
  },
  {
    path: "/blog-details",
    element: <BlogsDetails />,
    errorElement: <Error />,
  }, 
  {
    path: "/information-hub",
    element: <InformationHub />,
    errorElement: <Error />,
  },  
  {
    path: "/services-overview",
    element: <ServicesOverview />,
    errorElement: <Error />,
  },  
  {
    path: "/platform-overview",
    element: <PlatformOverview />,
    errorElement: <Error />,
  },
  {
    path: "/assessment",
    element: <Assessment />,
    errorElement: <Error />,
  }, {
    path: "/scoring",
    element: <Scoring />,
    errorElement: <Error />,
  },
   
]);
const App = () => {

  return (
    <>
  
      <RouterProvider router={router}  />

    </>
  );
};

export default App;