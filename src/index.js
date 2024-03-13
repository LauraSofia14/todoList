import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import New from './components/newtodo.js';
import Details from './components/tododetails.js';
import List from './components/todolist.js';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <List />,
  },

  {
    path: "/details/:id",
    element: <Details />,
  },

  {
    path: "/New",
    element: <New />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
