import { useLoaderData } from "react-router-dom";
import Employee from "../components/Employee.jsx";
import { getEmployees } from "../data/DataEmployees.js";

export function loader() {
 
  const employees = getEmployees()
  return employees
}

const Index = () => {

  const employees = useLoaderData()
  return (
    <>
      <h1 className='font-black text-4xl text-teal-900'>Empleados</h1>
      <p className='mt-3'>Control de Empleados</p>

      {employees.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-teal-800 text-white">
            <tr>
              <th className="p-2">Empleado</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <Employee
                employee={employee}
                key={employee.id}
              />
            ))}

          </tbody>

        </table>
      ) : (
        <p className="text-center mt-10"> Comienza añadiendo empleados</p>
      )
      }

    </>
  )
}

export default Index
