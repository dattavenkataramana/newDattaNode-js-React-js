import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');  
                if (!token) {
                    console.error('No JWT token found in localStorage');
                    return;
                }
                const response = await axios.get('http://localhost:3001/apidata/', {
                    headers: {
                        Authorization: `Bearer ${token}`  
                    }
                });
                const datas = response.data;
                console.log(datas);
                setUsers(datas);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);
    

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <p>UserName: {user.username}</p>
                        <p>MobileNumber: {user.mobilenumber}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
