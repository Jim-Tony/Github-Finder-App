import {useState,useEffect} from 'react';
import Spinner from '../layout/Spinner';
function UserResults() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers = async ()=>{
        // console.log("ishap");
        const response = await fetch(`https://api.github.com/users`,{
            // method:'GET',
            headers: {
                Authorization: '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'
            }}
            );
        console.log(response);

        const data = await response.json();
        // console.log(data);
        setUsers(data);
        setLoading(false);
    }
    if(!loading) return (
        <div className="grid mx-auto grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user)=>(<h3 key={user.id}>{user.login}</h3>))}
        </div>
    )
    else return <Spinner/>
}

export default UserResults