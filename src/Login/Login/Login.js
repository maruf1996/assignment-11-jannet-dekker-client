import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Login.css';

const Login = () => {
    const {signIn,signInGoogle}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || "/";

    const handleSignIn=event=>{
        event.preventDefault();
        const form=event.target;

        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);

        signIn(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    const handleGoogleSignIn=()=>{
        signInGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    return (
        <div className='login_form shadow-lg card p-5'>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3 input-group-lg" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" required/>
            </Form.Group>
            <Button variant="info my-4 text-light fw-bold btn-lg w-100" type="submit">
                Login
            </Button>
            </Form>
            <p className='text-center'>or</p>
            <Button onClick={handleGoogleSignIn} variant="danger mb-5 text-light fw-bold btn-lg w-100" type="submit"> Sign in Google
            </Button>
            <p>Create new account? <Link to='/signUp' className='text-decoration-none'>Sign up</Link></p>
        </div>
    );
};

export default Login;