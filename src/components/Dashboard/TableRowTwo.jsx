import { useContext, useState } from "react"
import DeleteModal from "../Modal/DeleteModal"
import { addBooking, deleteBooking, updateStatus } from "../../api/bookings"
import { toast } from "react-hot-toast"
import { AuthContext } from "../../providers/AuthProvider"
import { deleteSelectedClass } from "../../api/classes"
import BookingModal from "../Modal/BookingModal"
import Swal from "sweetalert2"
import useClass from "../../hooks/useClass"
import { useNavigate } from "react-router-dom"

const TableRowTwo = ({ classes, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, role } = useContext(AuthContext);
  const navigate = useNavigate()




  const [bookingInfo, setBookingInfo] = useState({
    student: { name: user?.displayName, email: user?.email, image: user?.photoURL },
    className: classes.className,
    seats: classes.seats,
    instructor: classes.instructorEmail,
    instructorName: classes.instructorName,
    price: classes.price,
    classId: classes.classid,
    image: classes.image
  })

  const closeModal = () => {
    setIsOpen(false)
  }

  const modalHandler = () => {
    addBooking(bookingInfo)
      .then(data => {
        console.log(data)
        updateStatus(classes._id, true)
          .then(data => {
            console.log(data);



            toast.success('Booking Successful')
            navigate('/dashboard/my-classes')
            closeModal()
          })
          .catch(err => console.log(err))

      })
      .catch(err => {
        console.log(err)
      })
  }




  const handleDelete = () => {
    console.log(classes);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    
    .then((result) => {
      console.log("clicked");
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/selectedClasses/${classes._id}`, {
          method: 'DELETE'
        })
        
          .then(res => res.json())
        // deleteSelectedClass(classes._id)
        



          .then(data => {
            console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })



      }
    })
  }



  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={classes?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{classes?.className}</p>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{classes?.instructorName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${classes?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={() => setIsOpen(true)} disabled={classes?.instructor?.email === user?.email || classes.booked} className='btn'>PAY</button>
        <BookingModal isOpen={isOpen} bookingInfo={bookingInfo} modalHandler={modalHandler} closeModal={closeModal}></BookingModal>
      </td>
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button>Delete</button>
      </td> */}


      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span onClick={handleDelete} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Cancel</span>
        </span>
        {/* <DeleteModal isOpen={isOpen2} closeModal={closeModal2} modalHandler={modalHandler2} id={classes._id}></DeleteModal> */}
      </td>
    </tr>
  )
}

export default TableRowTwo