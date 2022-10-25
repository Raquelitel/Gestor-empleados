import { Form, redirect, useNavigate } from "react-router-dom"
import { destroyEmployee } from "../data/DataEmployees"

export async function action({params}) {
    await destroyEmployee(params.employeeId)
    return redirect('/')
}

const Employee = ({ employee }) => {
    const { name, phone, email, work, id } = employee
    const navigate = useNavigate()
    return (
        <tr className="border-b">
            <td className="p-5 space-y-2">
                <p className="text-2xl text-gray-800 lowercase">{name}</p>
                <p>{work}</p>
            </td>
            <td className="p-5">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Teléfono: </span>{phone}</p>
            </td>
            <td className="p-5 text-center">
                <button
                    type="button"
                    className="text-teal-600 hover:text-teal-700 uppercase font-bold text-xs"
                    onClick={() => { navigate(`/employees/${id}/edit`) }}
                >Editar
                </button>
                <Form
                    method="POST"
                    action={`/employees/${id}/destroy`}
                    onSubmit={e => {
                        if (!confirm("¿Desea eliminar este empleado?")) {
                            e.preventDefault()
                        }
                    }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                        Borrar
                    </button>
                </Form>

            </td>
        </tr>
    )
}

export default Employee
