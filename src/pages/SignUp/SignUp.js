import React, { useState } from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(user));
        setUser({
            name: "",
            email: "",
            password: "",
        });
        alert("Sign up successful!");
    };

    return (
        <div>
            <div className="my-5">
                <div className="flex justify-center text-[#2c646c]  font-bold text-3xl head">
                    <Typed
                        strings={["Welcome To Our Website "]}
                        typeSpeed={40}
                        loop={true}
                        backSpeed={40}
                    />
                </div>

                <h1 className="flex justify-center text-[#2c646c]  font-bold text-4xl head">
                    Job Dekho
                </h1>
            </div>

            <div className="flex justify-center my-20">
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-title">Sign up your account</p>
                    <div className="input-container">
                        <input
                            placeholder="Enter name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            placeholder="Enter email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            type="email"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            placeholder="Enter password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            type="password"
                        />
                    </div>
                    <Link to={"/Login"}>
                        <button className="submit" type="submit">
                            Sign Up
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
