import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useClass = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-school-server-peach.vercel.app/selectedClasses?email=${user?.email}`)
            return res.json();
        },
    })

    return [selectedClasses, refetch]

}
export default useClass;