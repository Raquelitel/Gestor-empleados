export async function getEmployees() {
    const resp  = await fetch(import.meta.env.VITE_API_URL)
    const data = await resp.json()
    return data
}

export async function getEmployee(id) {
    const resp  = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const data = await resp.json()
    return data
}

export async function addEmployee(data) {
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resp.json()

    } catch (error) {
        console.log(error)
    }
}

export async function changeEmployee(id, data) {
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method:"PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resp.json()

    } catch (error) {
        console.log(error)
    }
}

export async function destroyEmployee(id) {
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE"
        })
        await resp.json()

    } catch (error) {
        console.log(error)
    }
}