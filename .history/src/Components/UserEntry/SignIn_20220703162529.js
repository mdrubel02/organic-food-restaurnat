import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h1>Login Here</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="Name"
                                    placeholder="Enter Name"
                                    {...register("Name", {
                                        required: {
                                            value: true,
                                            message: 'please Valid name here'
                                        }  
                                    }
                                    )}
                                />
                                <Form.Text className="text-muted">
                                    {/* {errors} */}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    {...register("Name", {
                                        required: {
                                            value: true,
                                            message: 'please Valid name here'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please Valid Email'
                                        }
                                    }
                                    )}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;