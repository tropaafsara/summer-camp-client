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