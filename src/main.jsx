import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import NewEmployee, {action as newEmployeeAction} from './pages/NewEmployee.jsx'
import Index, { loader as employeesLoader} from './pages/Index.jsx'
import ErrorPage from './components/errorPage.jsx'
import EditEmployee, {loader as editEmployeeLoader, action as editEmployeeAction} from './pages/EditEmployee.jsx'
import { action as destroyEmployeeAction } from './components/Employee.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: employeesLoader,
        errorElement: <ErrorPage/>
      },
      {
      path: '/employees/new',
      element: <NewEmployee/>,
      action: newEmployeeAction,
      errorElement: <ErrorPage/>
    },
    {
      path: '/employees/:employeeId/edit',
      element: <EditEmployee/>,
      loader: editEmployeeLoader,
      action: editEmployeeAction,
      errorElement: <ErrorPage/>
    },
    {
      path: '/employees/:employeeId/destroy',
      errorElement: <ErrorPage/>,
      action: destroyEmployeeAction,
    }
  ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
