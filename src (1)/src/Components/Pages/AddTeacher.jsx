import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import style from "../style.module.css"

export default function AddTeacher() {
    const [classes, setClasses] = useState(0)
    const history = useHistory()
    const [classData, setClassData] = useState([])
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const userData = JSON.parse(localStorage.getItem("activeUserDetails")) || []
    const [age, setAge] = useState("")

    const handleCancel = () => {
        history.push("/dashboard")
    }

   

    const handleSubmit = () => {
        let obj = {
            name,
            gender,
            age,
            school_id: userData.obj["_id"],
            classes: [...classData]
        }
        Axios.post("http://localhost:3033/teacher", obj)
            .then(res => {
                alert("Teacher Added to Data Base!")
                history.push("/dashboard")
            })
            .catch(err => console.log(err.response.data))
    }

   

    return (
        <div className={`p-5 ${style.form}`}>
            <h3 className="text-center text-info">Add Teachers Here</h3>
            <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Teacher Name" />
            <select value={gender} onChange={e => setGender(e.target.value)} className="form-control">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input className="form-control" type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter Age" />
            <h5 className="text-info">Classes</h5>
            <Classes onSubmit={handleAdd} />
           
            <div className="row">
                <button className="col-4 btn btn-info" onClick={() => setClasses(classes + 1)}>Add More Class</button>
                <button className="col-4 btn btn-success" onClick={handleSubmit}>Add Teacher</button>
                <button className="col-4 btn btn-danger" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}


