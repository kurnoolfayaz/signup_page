import React, { useState } from 'react'
import SingupImg from './SingupImg';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {

    let history = useNavigate();

    const [inputVal, setInputVal] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const getData = (e) => {
        const { value, name } = e.target;

        setInputVal(() => {
            return { ...inputVal, [name]: value }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        const { email, password } = inputVal;

        let getData = localStorage.getItem("UserData")
        console.log(getData)

        if (email === "") {
            setError(true)
        } else if (password === "") {
            setError(true)
        } else if (password.length < 5) {
            setError(true)
        } else {

            if (getData && getData.length) {
                let userdata = JSON.parse(getData)
                let userlogin = userdata.filter((element, index) => {
                    return element.email === email && element.password === password
                })
                if (userlogin.length === 0) {
                    alert("Enter correct details")
                } else {
                    console.log("Successfully entered");
                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    history("/details")
                }
            }

        }
    }

    return (
        <>
            <div className="container">
                <section className="row">
                    <div className="left_side col-lg-6  ">
                        <h1 className="heading"> Login  </h1>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
                                {error && inputVal.email.length <= 0 ? <small>Email can not be empty</small> : ""}
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" autoComplete='off' />
                                {error && inputVal.password.length <= 0 ? <small> Create Password </small> : ""}
                                {error && inputVal.password.length === 3 ? <small> Password greater then 3 letters </small> : ""}
                            </Form.Group>

                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={"Remember Me"}
                                    />
                                </div>
                            ))}

                            <Button id="button" variant="success" onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p > Don't have an account? <span><NavLink to="/">SignUp</NavLink></span>  </p>
                    </div>
                    <div className="right_side col-lg-6" >
                        <SingupImg />
                    </div>
                </section>
            </div>



        </>
    )
}

export default Login