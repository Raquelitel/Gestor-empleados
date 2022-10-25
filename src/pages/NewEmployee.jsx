import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import Error from "../components/Error.jsx"
import FormEmployee from "../components/FormEmployee.jsx"
import { addEmployee } from "../data/DataEmployees.js"

export async function action({request}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const email = formData.get("email")
  
 

  // Validación
  const error = []
  if(Object.values(data).includes("")) {
    error.push("Todos los campos son obligatorios")
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)) {
    error.push("El email no es válido")
  }
  // Retornar error
  if (Object.keys(error).length) {
    return error
  }

  await addEmployee(data)

  return redirect("/")
}

const NewEmployee = () => {
  const error = useActionData()
  const navigate = useNavigate()
  return (
    <>
      <h1 className='font-black text-4xl text-teal-900 capitalize'>nuevo Empleado</h1>
      <p className='mt-3 capitalize'>rellena todos los campos</p>
      <div className="flex justify-end">
        <button className="bg-teal-800 text-white px-3 py-1 font-bold uppercase"
        onClick={() => navigate(-1)}>Ir atrás</button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {error?.length && error.map((error, i) => <Error key={i}>{error}</Error> )}
        <Form
        method="POST"
        noValidate
        >
        <FormEmployee/>
        <input 
        type="submit"
        className="mt-5 w-full bg-teal-800 p-3 uppercase font-bold text-white text-lg"
        value="Crear nuevo empleado"
        />
        </Form>

      </div>
    </>
  )
}

export default NewEmployee
