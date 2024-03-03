import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (

    <div>
        <form onSubmit={Submit}>
            <h2>add user</h2>
            <div>
                <lable>Name</lable>
                <input type="text" placeholder='Enter name'
                onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <lable>Email</lable>
                <input type="email" placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <lable>Age</lable>
                <input type="text" placeholder='Enter age'
                onChange={(e) => setAge(e.target.value)}></input>
            </div>
            <button>submit</button>
        </form>
      
    </div>
  )
}
