import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewUsers = () => {
const {user_id} = useParams();
const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

useEffect(()=>{
    ViewUser();
}, [])


const ViewUser = async () => {
    const user = await axios.get(`http://localhost:3001/users/${user_id}`);
    const userData = user.data;
    setUser(userData) ;
    console.log(userData);
}

return (
    <div className="container">
        <ul>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
        </ul>
    </div>
)
}

export default ViewUsers;