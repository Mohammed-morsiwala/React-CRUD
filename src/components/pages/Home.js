import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading((preState) => !preState);
    const url = "http://localhost:3001/users";
    const response = await axios.get(url);
    console.log(response.data);
    setIsLoading((preState) => !preState);

    setUsers(response.data);
  };

  const deleteUser = async user_id => {
    await axios.delete(`http://localhost:3001/users/${user_id}`);
    console.log("user deleted");
    loadUsers();
  }

  return (
    <div className="container">
      <div className="py-4">Home Page</div>
      <div>
        {isLoading && (
          <div class="spinner-border center" role="status">
            <span class="sr-only"></span>
          </div>
        )}
        {!isLoading && (
          <table className="table  border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary mr-5" to={`/users/${user.id}`}>View</Link>
                    <Link
                      className="btn btn-outline-primary mr-2"
                      to={`/users/editUser/${user.id}`}
                      
                    >
                      Edit
                    </Link>
                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
