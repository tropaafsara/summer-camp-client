import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const FeedbackModal = ({classId,onFeedbackSent}) => {

    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
      setFeedback(event.target.value);
    };

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        fetch(`https://summer-camp-school-server-peach.vercel.app/classes/feedback/${classId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Thank you for your feedback")
        // Clear the feedback input
        setFeedback('');
        // Trigger the feedback sent callback 
        if (onFeedbackSent) {
          onFeedbackSent();
        }
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
      });
    }


    return (
        <div className='bg-fuchsia-800 hover:bg-purple-800 rounded p-1 text-white text-center'>
            {/* You can open the modal using ID.showModal() method */}
<button onClick={()=>window.my_modal_4.showModal()}>Feedback</button>
<dialog id="my_modal_4" className="modal">
  <form  method="dialog" className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Write a feedback !</h3>
    {/* <input type="text" /> */}
    <div className='flex flex-col gap-4'>
    <textarea 
    value={feedback}
    onChange={handleFeedbackChange}
    className="textarea  h-40 w-full mt-8" placeholder="Write a feedback"></textarea>
    <button onClick={handleFeedbackSubmit} className="btn bg-fuchsia-800 text-white ">Send</button>
    </div>
    <div className="modal-action">
      {/* if there is a button, it will close the modal */}
      
      <button className="btn ">Close</button>
    </div>
  </form>
</dialog>
        </div>
    );
};

export default FeedbackModal;