import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Details() {

    let history = useNavigate();

    const [loginData, setLoginData] = useState([])

    const printData = () => {
        const getuser = localStorage.getItem("user_login");

        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);

            const userLogin = loginData.map((element, index) => {
                return element.email === loginData.email
            });

            if (userLogin) {
                setTimeout(() => {
                    printData();
                }, 3000)
            }

        }
    }

    const userLogout = () => {
        localStorage.removeItem("user_login");
        history("/")
    }

    useEffect(() => {
        printData();
    }, [])

    return (
        <>
            {
                loginData.length === 0 ? "Error" :
                    <>
                        

                        <table className="table  table-hover  ">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{loginData[0].name}</td>
                                    <td>{loginData[0].email}</td>
                                    <td>{loginData[0].password}</td>
                                </tr>                                
                            </tbody>
                        </table>

                        <button  type="button" onClick={userLogout}  style={{marginLeft:"50px"}} className="btn btn-dark ml-2  ">Logout</button>	

                        {
                            loginData[0].email === loginData[0].email ?
                                " " : alert(loginData[0].name)

                        }
                    </>

            }

        </>
    )
}

export default Details