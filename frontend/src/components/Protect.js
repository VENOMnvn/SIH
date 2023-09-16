import { useEffect } from 'react';
import { useUserAuth } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

const Protect = ({children}) => {

    const {user, loading} = useUserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!loading && !user && !user?.username)
        {
           navigate('/login');
        }
    }, [loading, user, navigate])

    if(user?.username && !loading)
    {
        return children
    }
    else
    {
       <p>loading...</p>
    }
}

export default Protect
