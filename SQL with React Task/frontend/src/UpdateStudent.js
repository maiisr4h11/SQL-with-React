import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function UpdateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');
    const { id } = useParams();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:4000/update/' + id, { name, email, marks, grade, city })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.error("Update error:", err);
            })
    }
    return (
        <div>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <h2>Update Student</h2>
                    <form onSubmit={handleSubmit}> {/* Form submission triggers handlesubmit function */}
                        <div className='mb-3'>
                            <label>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update name state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input
                                type='text'
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Marks</label>
                            <input
                                type='text'
                                className='form-control'
                                value={marks}
                                onChange={(e) => setMarks(e.target.value)} // Update marks state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Grade</label>
                            <input
                                type='text'
                                className='form-control'
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)} // Update grade state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>City</label>
                            <input
                                type='text'
                                className='form-control'
                                value={city}
                                onChange={(e) => setCity(e.target.value)} // Update city state when input value changes
                            />
                        </div>
                        <button type='submit' className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateStudent