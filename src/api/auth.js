//save user to db
export const saveUser = user =>{
    const currentUser = {
        email: user.email,
        name: user.name,
        imageUrl: user.imageUrl,
        role: 'student'
      };
    
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
        
    })
    .then(res=>res.json())
    .then(data => console.log(data))
}

//become a host
export const becomeHost = email =>{
    const currentUser ={
        role: 'instructor',
    }
    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res=>res.json())
}



//get role
export const getRole = async email =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`,
    {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    }
)
const user = await response.json()
return user?.role

}