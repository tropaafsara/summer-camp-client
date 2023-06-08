import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Card from './Card'
import { getAllClass } from '../../../api/classes'
import { useLoaderData } from 'react-router-dom'

// import Loader from '../Shared/Loader'
// import { useSearchParams } from 'react-router-dom'
// import Heading from '../Heading/Heading'

const Classes = () => {
//   const [params, setParams] = useSearchParams()
//   const category = params.get('category')

const classData = useLoaderData();
// console.log(classData);

  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    getAllClass()
      .then(data => {
        setClasses(data)
        // if (category) {
        //   const filtered = data.filter(room => room.category === category)
        //   setRooms(filtered)
        // } else {
        //   setRooms(data)
        // }

        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])
//       .catch(err => console.log(err))
//   }, [category])

//   if (loading) {
//     return <Loader />
//   }
  return (
    
     <Container>
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-8'>
          {classes.map((cls, index) => (
            <Card key={index} cls={cls} classData={classData}/>
          ))}
        </div>
     </Container>

    
  )
}

export default Classes