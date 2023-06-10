//Add a class
export const addClass = async classData=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData)
    })

    const data = await response.json()
    return data
}

//get all class
export const getAllClass = async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data
}
//get filtered classes
export const getClasses = async(email)=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
    const data = await response.json()
    return data
}
//get a single class
export const getClass = async(id)=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/class/${id}`)
    const data = await response.json()
    return data
}

//delete a class
export const deleteClass = async id=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })

    const data = await response.json()
    return data
}