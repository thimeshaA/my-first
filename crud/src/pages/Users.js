import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) =>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
        window.location.reload()
    })
    .catch(errr => console.log(errr))
  }

  return (
    <div>
      <div>
        <h1>Current Users</h1>
        <Link to="/create">add +</Link>

        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                  <Link to={`/update/${user._id}`}>Update</Link>
                    <button onClick={(e) => handleDelete(user._id)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
