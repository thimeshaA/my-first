import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom' 
import axios from "axios";

export default function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    }, []);

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, { name, email, age })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" placeholder='Enter age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <button>Update</button>
            </form>
        </div>
    );
}
