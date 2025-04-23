import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const Login = () => {
    const { register, handleSubmit, formState: { errors }  } = useForm(
        { resolver: yupResolver(loginSchema),}

    );

    const navigate = useNavigate();
    const [error, setError] = useState(false);


    const onLogin = data => {
        console.log(data);
        const { username, password } = data;
        if (username === "admin" && password === "admin") {
            alert("Login successful!");
            navigate("/timeline");
        }
        else {
            setError(true);
            alert("Invalid username or password");
        }
    };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onLogin)}
        className="myform shadow-lg p-3 mb-5 bg-body rounded"
      >
        <h1 className="text-2xl">Login</h1>
        <p className="mt-2">Welcome back! Please login to your account.</p>
        <input
          type="text"
          className="input mt-2 w-full"
          placeholder="Username"
          {...register("username")}
        />
        <p className="text-red-500">{errors.username?.message}</p>
        <input
          type="password"
          className="input mt-2 w-full"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-red-500">{errors.password?.message}</p>
        <div className="flex justify-between mt-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-500">
            Forgot Password?
          </a>
        </div>
        {error &&
        (
          <div className="my-2 rounded-md w-full bg-red-200 p-3">
            <p className="text-red-500">Invalid Username or Password </p>
          </div>
        )}
        <button className="btn btn-primary w-full mt-2 " type="submit">
          Login
        </button>
        <p className="text-center mt-2">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login