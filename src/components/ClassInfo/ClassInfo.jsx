import { useContext, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookingModal";
import { addBooking, updateStatus } from "../../api/bookings";
import { toast } from "react-hot-toast";

const ClassInfo = () => {
    const classData = useLoaderData()
    // console.log(classData);
    const [isOpen, setIsOpen] = useState(false);
    const { user, role } = useContext(AuthContext)



    const [bookingInfo, setBookingInfo] = useState({
        className: classData.className,
        seats: classData.seats,
        instructor: classData.instructor.email,
        price: classData.price,
        classId: classData._id,
        image: classData.image
    })
    


    const modalHandler =()=>{
        addBooking(bookingInfo)
        .then(data=>{
            console.log(data)
            updateStatus(classData._id, true)
            .then(data=>{
                console.log(data);
                toast.success('Booking Successful')
                // navigate('/dashboard/my-bookings')
                closeModal()
            })
            .catch(err=>console.log(err))
               
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const closeModal =() =>{
        setIsOpen(false)
    }

    return (
        <div className='col-span-4 flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <div
                    className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
                >



                </div>
                <div
                    className='
              
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
                >
                    <div>{classData.className}</div>
                    <div>{classData.seats}</div>
                    <div>{classData.price}</div>
                    <div>{classData.instructorName}</div>
                </div>
            </div>
            <button onClick={() => setIsOpen(true)} disabled={classData?.instructor?.email === user?.email || classData.booked} className='btn'>select</button>
            <BookingModal isOpen={isOpen} bookingInfo={bookingInfo} modalHandler={modalHandler} closeModal={closeModal}></BookingModal>

            <hr />

            <hr />
        </div>
    )
}

export default ClassInfo