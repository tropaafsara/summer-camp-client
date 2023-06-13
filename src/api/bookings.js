//Add a booking
export const addBooking = async bookingData=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    })

    const data = await response.json()
    return data
}
//update class status
export const updateStatus = async (id,status)=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/status/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({status})
    })

    const data = await response.json()
    return data
}
//get all bookings for a user by email
export const getBookings = async email=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`)
    const bookings = await response.json()
    return bookings
}


//delete a booking
export const deleteBooking = async id=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })

    const data = await response.json()
    return data
}


export const getInstructorBookings = async email => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/bookings/instructor?email=${email}`
    )
    const bookings = await response.json()
    return bookings
  }