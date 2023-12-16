import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home.jsx';
import MarketPlace from './pages/MarketPlace.jsx';
import Navbar from './components/navbar/navbar.jsx';
import SellerRegistration from './pages/SellerRegistration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path:"/",
      element: <Home/>
    },{
      path:"marketplace",
      element: <MarketPlace/>
    },{
      path:"seller",
      element: <SellerRegistration/>
    }],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
