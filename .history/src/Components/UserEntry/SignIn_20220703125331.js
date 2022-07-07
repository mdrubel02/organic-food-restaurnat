import React from 'react';
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input type="text" {...register("example")} />
            </form>
        </div>
    );
};

export default SignIn;