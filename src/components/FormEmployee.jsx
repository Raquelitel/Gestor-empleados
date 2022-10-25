const FormEmployee = ({employee}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Empleado"
                    name="name"
                    defaultValue={employee?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="work"
                >Puesto:</label>
                <input 
                    id="work"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Puesto del Empleado"
                    name="work"
                    defaultValue={employee?.work}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Empleado"
                    name="email"
                    defaultValue={employee?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone"
                >Teléfono:</label>
                <input 
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Empleado"
                    name="phone"
                    defaultValue={employee?.phone}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Empleado"
                    name="notes"
                    defaultValue={employee?.notes}
                />
            </div>
        </>
    )
}

export default FormEmployee