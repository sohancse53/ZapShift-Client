import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Covrage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../pages/DashBoard/MyParcels/MyParcels";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentSuccess from "../pages/DashBoard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/DashBoard/Payment/paymentCancelled";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/DashBoard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/DashBoard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/DashBoard/AssignRiders/AssignRiders";
import AssignedDeliveries from "../pages/DashBoard/AssignedDeliveries/AssignedDeliveries";
import RiderRoutes from "./RiderRoutes";
import CompletedDeliveries from "../pages/DashBoard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../pages/DashBoard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json"),
      },

      // track a parcel by tracking Id
      {
        path:'parcel-track/:trackingId',
        Component:ParcelTrack,
      },


      {
        path: "/*",
        Component: ErrorPage,
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index:true,
        Component: DashboardHome,
      },
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        //lekho------------
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-cancelled",
        element: <PaymentCancelled />,
      },

      // rider only routes
      {
        path:'assigned-deliveries',
        element:<RiderRoutes>
          <AssignedDeliveries/>
        </RiderRoutes>
      },
      {
        path:'completed-deliveries',
        element:<RiderRoutes>
          <CompletedDeliveries/>
        </RiderRoutes>
      },

      // admin related routes
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        ),
        // Component:ApproveRiders
      },
      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
        // Component:UsersManagement
      },
      {
        path: "assign-riders",
        element: (
          <AdminRoute>
            <AssignRiders />
          </AdminRoute>
        ),
        // Component:UsersManagement
      },
    ],
  },

]);

export default router;
