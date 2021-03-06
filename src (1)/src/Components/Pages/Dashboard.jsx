import Axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import Teachers from "./Teachers"
import style from "../style.module.css"
import { Link } from "react-router-dom"

export default function DashBoard() {

    const [sort, setSort] = useState("")
    const [gender, setGender] = useState("")
    const [userData, setUserData] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [totalPages, setTotalPages] = useState([])
    const [err, setErr] = useState("")

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("activeUserDetails")));
        console.log(userData);
    }, [])
    const handleSearch = () => {
        Axios.get(`http://localhost:5000/teacher?school_id=${userData.obj["_id"]}&name=${search}`)
            .then(res => {
                if (res.data.length === 0) {
                    setErr(`No Teacher by name ${search}`)
                }
                else {
                    setData(res.data)
                    setTotalPages([1])
                }
            })
            .catch(err => console.log(err.response.data))
    }

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:5000/teacher/delete/${id}`)
            .then(res => {
                alert("Teacher Deleted successfully!")
                fetching()
            })
            .catch(err => console.log(err.response.data))
    }

    const handleEdit = ({ obj }) => {
        Axios.post(`http://localhost:5000/teacher/edit/${obj._id}`, obj)
            .then(res => {
                alert("Teacher Edited successfully!")
                fetching()
            })
            .catch(err => console.log(err.response.data))
    }

    const fetching = () => {
        Axios.get(`http://localhost:5000/teachers?school_id=${userData.obj["_id"]}&sort=${sort}&gender=${gender}&page=${page}`)
            .then(res => {
                setData([...res.data.teachers])
                setPage(res.data.page)
                let temp = []
                for (let i = 1; i <= res.data.totalPages; i++) {
                    temp.push(i)
                }
                setTotalPages(temp)
            })
            .catch(err => setErr(err.response.data))
    }

    // userData?.obj["_id"] == userData?.obj._id
    useEffect(() => {
        if (userData.obj) {
            Axios.get(`http://localhost:5000/teachers?school_id=${userData.obj["_id"]}&sort=${sort}&gender=${gender}&page=${page}`)
                .then(res => {
                    setData([...res.data.teachers]);
                console.log(res.data)

                    let temp = []
                    for (let i = 1; i <= res.data.totalPages; i++) {
                        temp.push(i)
                    }
                    setTotalPages(temp)
                })
                .catch(err => setErr(err.response.data))
        }
    }, [sort, gender, page, userData])

    return (
        <div>
            <div className="row">
                <div className="col-2 col-lg-1 py-5 border-right text-center">
                    <div>
                        <Link to="/addteacher">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/17/17132.svg" alt="Adding" width="20px" height="20px" />
                        </Link>
                    </div>
                    <div className="mt-5">
                        <div className={style.hoverDiv}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/565/565341.svg" alt="sort" width="20" />
                            <div className={`${style.innerHoverDiv}`}>
                                <p onClick={() => setSort("")}>Original</p>
                                <p onClick={() => setSort("asc")}>Ascending</p>
                                <p onClick={() => setSort("dsc")}>Descending</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className={style.hoverDiv}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/60/60954.svg" alt="sort" width="20" />
                            <div className={`${style.innerHoverDiv}`}>
                                <p onClick={() => setGender("")}>Original</p>
                                <p onClick={() => setGender("male")}>Male</p>
                                <p onClick={() => setGender("female")}>Female</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-11">
                    <div className="pt-5 text-center text-danger">{err}</div>
                    <Teachers data={data} handleDelete={handleDelete} handleEdit={handleEdit} search={search} setSearch={setSearch} handleSearch={handleSearch} page={page} setPage={setPage} totalPages={totalPages} />
                </div>
            </div>
        </div >
    )
}