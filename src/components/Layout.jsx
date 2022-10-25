import { Link, Outlet, useLocation } from "react-router-dom"
import logo from "../img/logo.jpg"

const Layout = () => {
  const location = useLocation()
  return (
      <div className="md:flex">
        <aside className="md:w-1/4 bg-teal-600 px-5 py-10">
          <img className="rounded-full w-64 m-auto" src={logo} alt="logo crm" />
          {/* <h2 className="text-4xl font-black text-center text-white">CRM - Employees</h2> */}
          <nav className="mt-10">
            <Link className={`${location.pathname === "/" ? "text-teal-400" : "text-white"} text-2xl block mt-2 hover:text-teal-200`} to="/">Empleados</Link>
            <Link className={`${location.pathname === "/employees/new" ? "text-teal-400" : "text-white"} text-2xl block mt-2 hover:text-teal-200`} to="/employees/new">Nuevo Empleado</Link>
          </nav>
        </aside>
        <main className="md:w-3/4 px-5 py-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
      </div>
  )
}

export default Layout
