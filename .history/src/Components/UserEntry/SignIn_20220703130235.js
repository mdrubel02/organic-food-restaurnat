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
                <input type="text" {...register("FistName")} placeholder="Name Here" />
                <input type="text" {...register("LastName")} placeholder="Name Here" />
                <input type="email" {...register("email")} placeholder="Email Here" />
                <input type="submit" value="submit" />
                <p>hello</p>
            </form>
        </div>
    );
};

export default SignIn;