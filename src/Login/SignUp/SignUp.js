import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './SignUp.css';

const SignUp = () => {
    const {createUser,updateUser,signInGoogle}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('SignUp');

    const from = location.state?.from?.pathname || "/";

    const handleCreateUser=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(name,email,password);

        createUser(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            updateUser(name)
            navigate(from, { replace: true });
            form.reset();
            window.location.reload();
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
        <div className='signUp_form shadow-lg card p-5'>
            <h2 className='text-center'>Sign Up</h2>
        <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3 input-group-lg" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3 input-group-lg" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' type="email" required/>
        </Form.Group>

        <Form.Group className="mb-3 input-group-lg" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" required/>
        </Form.Group>
        <Button variant="info my-4 text-light fw-bold btn-lg w-100" type="submit">
            SignUp
        </Button>
        </Form>
        <p className='text-center'>or</p>
        <Button onClick={handleGoogleSignIn} variant="danger mb-5 text-light fw-bold btn-lg w-100" type="submit">
            Sign in Google
        </Button>
        <p>You have an account? <Link to='/login' className='text-decoration-none'>Login</Link></p>
    </div>
    );
};

export default SignUp;