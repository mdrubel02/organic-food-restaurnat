import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SignIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    if (user || googleUser) {
        navigate('/')
    }
    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data.Email, data.password);
        console.log(event);
        signInWithEmailAndPassword(data.Email, data.password)
        // console.log(watch())
        reset();

    }
    console.log(error, googleError);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h1>Login Here</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="Email"
                                    placeholder="Enter email"
                                    {...register("Email", {
                                        // required: {
                                        //     value: true,
                                        //     message: 'please Valid name here'
                                        // },
                                        pattern: {
                                            value: "",
                                            message: 'Please Valid Email'
                                        }
                                    }
                                    )}
                                />
                                {errors.Email?.type === "pattern" && <Form.Text className="text-muted">
                                    {errors.Email.message}
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", {
                                        pattern: {
                                            value: true,
                                            message: 'Please strong password'
                                        }
                                    })}
                                />
                                {errors.password?.type === "pattern" && <Form.Text className="text-muted">
                                    {errors.password.message}
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                        <Link to='/signUp'><p>You have don't account</p></Link>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;