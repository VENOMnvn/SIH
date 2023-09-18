import { useNavigate } from "react-router-dom";

const RedirectionPage = ()=>{
    const navigate = useNavigate();

    setTimeout(()=>{
        navigate('/');
    },2000);


    return <div>
    <h1>404 Page not Found</h1>
    <h3>Redirecting to Homepage</h3>
    
    </div>
}

export default RedirectionPage;