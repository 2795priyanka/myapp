import React,{useState, useEffect} from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Register = () => {
    const initialValues = {name:"", email:"", password:"", address:""}
    const [inputData, setInputData] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setInputData({...inputData, [name]:value})
    }
    const handleRegister = (e)=>{
        e.preventDefault();
        setInputErrors(validate(inputData));
        setIsSubmit(true)
    }

    useEffect(()=>{
        console.log(inputErrors)
        if(Object.keys(inputErrors).length === 0 && isSubmit){
            console.log(inputData)
        }
    },[inputErrors])

    const validate = (values)=>{
        const errors = {};
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!values.name){
            errors.name = "Name is required"
        }
        if(!values.email){
            errors.email = "Email is required"
        }else if(!regex.test(values.email)){
            errors.email = "Please enter valid email"
        }
        if(!values.password){
            errors.password = "Password is required"
        }else if(values.password.length < 4){
            errors.password = "Password must be more than 4 characters"
        }else if(values.password.length > 10){
            errors.password = "Password cannot exceed more than 10 characters"
        }
        if(!values.address){
            errors.address = "Address is required"
        }
        return errors;
    }
    return(
        <>
         <div className="register_section">
                <Container>
                    <Row className='justify-content-center '>
                        <Col lg={6} className="border p-5 register_col">
                          
                            <div className="register_form">
                                <h4 className='text-center'>Register</h4>

                                <label>Name</label>
                                <input type="text" className='form-control' placeholder='Enter Your Name' name="name" value={inputData.name} onChange={handleChange} />
                                <p className='text-danger'>{inputErrors.name}</p>
                                <br></br>

                                <label>Email</label>
                                <input type="email" className='form-control' placeholder='Enter Your Email' name="email" value={inputData.email} onChange={handleChange} />
                                <p className='text-danger'>{inputErrors.email}</p>
                                <br></br>

                                <label>Password</label>
                                <input type="password" className='form-control' placeholder='Enter Your Email' name="password" value={inputData.password} onChange={handleChange} />
                                <p className='text-danger'>{inputErrors.password}</p>
                                <br></br>

                                <label> Address</label><br></br>
                                <select className='form-control' name="address" value={inputData.address} onChange={handleChange}>
                                    <option>Select Address</option>
                                    <option value="inodre">Indore</option>
                                    <option value="pune">Pune</option>
                                    <option value="banglore">Banglore</option>
                                </select>
                                <p className='text-danger'>{inputErrors.address}</p>
                                <br></br>

                                <div className='d-grid'>
                                <button className='btn btn-primary btn-block' onClick={handleRegister}>Register</button>
                                </div><br></br>
                                <p>Don't have an account yet? <Link to="/login">Login here</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default Register;