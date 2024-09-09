import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { AuthLayout, Login } from './components/index.js';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/profile.jsx';
import Schemes from './pages/Schemes.jsx';
import CropRecommendation from './pages/Crop-Recommendation.jsx';
import FertilizerRecommendation from './pages/Fertilizer-Recommendation.jsx';
import CropClinic from './pages/Crop-Clinic.jsx';
import FarmCare from './pages/FarmCare.jsx';
import OurCommunity from './pages/OurCommunity.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/Dashboard",
        element: <Dashboard />, // Parent component for /Dashbord
        children: [
          {
            path: "Profile", // Nested route (without leading '/')
            element: <Profile />,
          },
          {
            path: "Schemes", // Nested route (without leading '/')
            element: <Schemes />,
          },
          {
            path: "croprecommendation", // Nested route (without leading '/')
            element: <CropRecommendation />,
          },
          {
            path: "fertilizerrecommendation", // Nested route (without leading '/')
            element: <FertilizerRecommendation />,
          },
          {
            path: "cropclinic", // Nested route (without leading '/')
            element: <CropClinic />,
          },
          {
            path: "ourcommunity", // Nested route (without leading '/')
            element: <OurCommunity/>,
          },
          {
            path: "farmcare", // Nested route (without leading '/')
            element: <FarmCare/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
