import React from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="login_section ">
                <Container>
                    <Row className='justify-content-center '>
                        <Col lg={6} className="border p-5 login_col">
                            <div className="login_form">
                                <h4 className='text-center'>Login</h4>

                                <label>Email</label>
                                <input type="email" className='form-control' placeholder='Enter Your Email' /><br></br>

                                <label>Password</label>
                                <input type="password" className='form-control' placeholder='Enter Your Password' /><br></br>

                                <div className='d-grid'>
                                <button className='btn btn-primary btn-block'>Login</button>
                                </div><br></br>
                                <p>Don't have an account yet? <Link to="/register">Register here</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}



export default Login;