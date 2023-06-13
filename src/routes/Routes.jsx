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
import ManageBookings from "../pages/Dashboard/ManageBookings";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import PopularInstructors from "../pages/Home/PopularInstructors";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";

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
          path: '/instructors',
          element: <PopularInstructors></PopularInstructors>
        },
        // {
        //   path: '/class/:id',
        //   element: <ClassInfo></ClassInfo>,
        //   loader: ({params}) => getClass(params.id)
        // },
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
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path: '/dashboard',
          element: <MyClasses></MyClasses>
        },
        {
          path: '/dashboard/add-class',
          element: <AddClass></AddClass>
        },
        {
          path: '/dashboard/my-classes',
          element: <MyClasses></MyClasses>
        },
        {
          path: '/dashboard/my-selected-classes',
          element: <MySelectedClasses></MySelectedClasses>
        },
        {
          path: '/dashboard/my-listings',
          element: <MyListings></MyListings>
        },
        {
          path: '/dashboard/manage-bookings',
          element: <ManageBookings></ManageBookings>
        },
        {
          path: '/dashboard/manage-classes',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: '/dashboard/manage-users',
          element: <ManageUsers></ManageUsers>
        },
      ]
    },
  ]);