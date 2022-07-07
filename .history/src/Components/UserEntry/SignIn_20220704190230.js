import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const SignIn = () => {
    const [value,setValue] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = (data,event) => {
        event.preventDefault();
        console.log(data);
        console.log(event);
        // console.log(watch())
        reset();
       
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <h1>Login Here</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" >
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
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please Valid Email'
                                        }
                                    }
                                    )}
                                />
                                {errors.Email?.type === "pattern"  && <Form.Text className="text-muted">
                                    {errors.Email.message}
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Password"
                                {...register("password",{
                                    pattern: {
                                        value: true,
                                        message: 'Please strong password'
                                    }
                                })}
                                />
                                {errors.password?.type === "pattern"  && <Form.Text className="text-muted">
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
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;