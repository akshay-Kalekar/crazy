import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import MarketPlace from './pages/MarketPlace.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import SellerRegistration from './pages/SellerRegistration.jsx';
import SellerCategory from './pages/SellerCategory.jsx';
import { SellerOffering } from './pages/SellerOffering.jsx';
import SellerBackground from './pages/SellerBackground.jsx';

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
    },{
      path:"sellerCategory",
      element:<SellerCategory/>
    },
    {
      path:"sellerOffering",
      element:<SellerOffering/>
    },{
      path:"sellerBackground",
      element:<SellerBackground/>
    }],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
