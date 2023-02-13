import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditUsers = () => {
  const history = useNavigate();
  const { user_id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    onLoadHandler();
  }, []);

  const { name, username, email } = user;
  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLoadHandler = async () => {
    const result = await axios.get(
      `http://localhost:3001/users/${user_id}`,
      user
    );
    const userData = result.data;
    setUser(userData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3001/users/${user_id}`,
      user
    );
    history("/");
  };

  return (
    <div className="container py-5">
      <form class="row g-3" onSubmit={onSubmitHandler}>
        <div class="col-auto">
          <label for="inputName">Name:</label>
          <input
            type="text"
            id="inputName"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div class="col-auto">
          <label for="inputUsername">Username:</label>
          <input
            type="text"
            id="inputUsername"
            placeholder="Username"
            value={username}
            name="username"
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div class="col-auto">
          <label for="inputEmail">Email:</label>
          <input
            type="text"
            id="inputEmail"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div class="row-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Edit Users
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUsers;
