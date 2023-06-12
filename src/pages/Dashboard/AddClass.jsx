import React, { useContext, useState } from 'react';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../providers/AuthProvider';
import AddClassForm from '../../components/Forms/AddClassForm';
import { addClass } from '../../api/classes';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const handleSubmit = (event)=>{
        
        event.preventDefault();
        setLoading(true);
        const className = event.target.className.value;
        const price = event.target.price.value;
        const seats = event.target.seats.value;
        const instructorName = event.target.instructorName.value;
        const instructorEmail = event.target.instructorEmail.value;
        const image = event.target.image.files[0];
        setUploadButtonText('uploading....')

        //upload image
        imageUpload(image).then(data=>{
             const classData ={
                image: data.data.display_url,
                className,
                instructorName,
                instructorEmail,
                seats,
                price,
                instructor: {
                    name:user?.display_name,
                    image: user?.photoUrl,
                    email: user?.email,
                },
            }
            console.log(classData);
            //post room data to server
            addClass(classData)
            .then(data=>{ 
                console.log(data)
                setUploadButtonText('uploaded')
                setLoading(false)
                toast.success('class added')
                navigate('/dashboard/my-listings')
            })
            .catch(err=> console.log(err))
            setLoading(false)
        })
        .catch(err=>{
            console.log(err.message);
            setLoading(false)
        })
       
    }
    const handleImageChange = image =>{
        setUploadButtonText(image.name);
    }

    return <AddClassForm
    handleSubmit={handleSubmit} 
    loading={loading} 
    handleImageChange={handleImageChange} 
    uploadButtonText={uploadButtonText}
    ></AddClassForm> 
};

export default AddClass;