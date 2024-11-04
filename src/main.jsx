import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root/Root';
import Home from './Components/Home/Home';
import EstateList from './Components/EstateList/EstateList';
import Details from './Components/EstateList/Details';
import AuthProvider from './Components/Providers/AuthProvider/AuthProvider';
import Login from './Components/Registration/Login/Login';
import SignUp from './Components/Registration/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/estate',
        element: <EstateList></EstateList>,
        loader: () => fetch('http://localhost:5000/estate')
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`/public/estate.json/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
