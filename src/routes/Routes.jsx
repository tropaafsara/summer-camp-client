import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import AddClass from "../pages/Dashboard/AddClass";
import Classes from "../components/Shared/Classes/Classes";
import ClassInfo from "../components/ClassInfo/ClassInfo";
import { getClass } from "../api/classes";
import MyClasses from "../pages/Dashboard/MyClasses";
import MyListings from "../pages/Dashboard/MyListings";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/class/:id',
          element: <ClassInfo></ClassInfo>,
          loader: ({params}) => getClass(params.id)
        },
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    
    {
      path: '/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children:[
        {
          path: '/dashboard/add-class',
          element: <AddClass></AddClass>
        },
        {
          path: '/dashboard/my-classes',
          element: <MyClasses></MyClasses>
        },
        {
          path: '/dashboard/my-listings',
          element: <MyListings></MyListings>
        },
      ]
    },
  ]);