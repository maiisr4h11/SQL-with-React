import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Student() {
    const [exam, setExam] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/")
            .then(res => setExam(res.data))
            .catch(err => console.log(err));
    }, []);
    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:4000/exam/' + id) // Send DELETE request to the server with the student ID
            window.location.reload() // Reload the page to reflect the changes
        }
        catch (error) {
            console.log(error) // Log any errors that occur during the deletion
        }
    }
    return (
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className='w-50 bg-white rounded p-3'>
                    <Link to={"/add"} className="btn btn-primary">Add</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Marks</th>
                                <th scope="col">Grade</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                exam.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.marks}</td>
                                        <td>{item.grade}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            <Link to={`update/${item.id}`} className='btn btn-success'>Update</Link>
                                            <button className='btn btn-danger ms-2' onClick={(e) => handledelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Student