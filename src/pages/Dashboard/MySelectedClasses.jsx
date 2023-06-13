import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider";
import EmptyState from "../../components/Shared/EmptyState";
import TableRowTwo from "../../components/Dashboard/TableRowTwo";
import { getAllClass, getClasses, getSelectedClasses } from "../../api/classes";
import useClass from "../../hooks/useClass";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useClass()
  const {user} = useContext(AuthContext);


  //  const fetchClassesTwo=()=>{
  //   getSelectedClasses(user?.email).then(data=>{
  //     setSelectedClasses(data);
  //   })
  // }
  // useEffect(()=>{
  //   fetchClassesTwo()
  // },[user])

  // console.log(selectedClasses);







    return (
      <>
      <h1>Total selected classes : {selectedClasses?.length || 0}</h1>
      {
        
        selectedClasses && Array.isArray(selectedClasses) && selectedClasses.length>0 ? (
            
          <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Class Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Instructor Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Payment
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                    





                    
                    
                    {selectedClasses && selectedClasses.map(classes=><TableRowTwo
                key={classes._id}
                classes={classes}
                refetch={refetch}
                // fetchClassesTwo={fetchClassesTwo}
                ></TableRowTwo>)}
                
                
                
                
                
                
                
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        ): (<EmptyState 
          message={'You did not book any class yet!'} 
          address={'/'} label={'Browse Classes'}
          ></EmptyState>)
      }
      
      </>
    )
  }
  
  export default MySelectedClasses