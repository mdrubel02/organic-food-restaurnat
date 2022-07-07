import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const SignIn = () => {
    const [value,setValue] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data,event) => {
        event.preventDefault();
        console.log(data);
        console.log(event);
        // console.log(watch())
        event.target.reset();
       
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h1>Login Here</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control type="text" placeholder="text" />
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    {...register("Name", {
                                        required: {
                                            value: String,
                                            message: 'please Valid name here'
                                        }
                                    }
                                    )}
                                />
                                {errors.Name?.type === "required" && <Form.Text className="text-muted">
                                    {errors.Name?.message}
                                </Form.Text>}
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
                                {errors.email?.type === "pattern"  && <Form.Text className="text-muted">
                                    {errors.email.message}
                                </Form.Text>}
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