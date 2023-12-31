import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import {deleteClass, getClasses} from "../../api/classes"
import ClassDataRow from "../../components/Dashboard/ClassDataRow";
import { toast } from "react-hot-toast";
import EmptyState from "../../components/Shared/EmptyState";

const MyListings = () => {
    const [classes, setClasses] = useState([])
    const {user} = useContext(AuthContext);
    
     const fetchClasses=()=>{
        getClasses(user?.email).then(data=>{
          setClasses(data)
      })
    }
    useEffect(()=>{
      fetchClasses()
    },[user])



    

    return (
      <>{classes && Array.isArray(classes) && classes.length>0 ? (
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
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Total Enrolled Students
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Feedback
                    </th>
                    {/* <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th> */}
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>{classes && classes.map(cls=><ClassDataRow 
                key={cls._id}
                cls={cls}
                fetchClasses={fetchClasses}
                ></ClassDataRow>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ): <EmptyState
      message={'You have not added any classes!'} 
          address={'/dashboard/add-class'} label={'Add Class'}
      ></EmptyState>}</>
      
      
    )
  }
  
  export default MyListings