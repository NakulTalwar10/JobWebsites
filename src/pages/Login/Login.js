import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {
  return (
    <div>
      <>
        <div className='my-5'>
          <div className='flex justify-center text-[#2c646c]  font-bold text-3xl head' >
            <Typed
              strings={['Welcome To Our Website ']}
              typeSpeed={40}
              loop={true}
              backSpeed={40}
            />
          </div>

          <h1 className='flex justify-center text-[#2c646c]  font-bold text-4xl head'>Job Dekho</h1>
        </div>


        <div className='flex justify-center my-20'>
          <form className="form">
            <p className="form-title">Sign in to your account</p>
            <div className="input-container">
              <input placeholder="Enter email" type="email" />

            </div>
            <div className="input-container">
              <input placeholder="Enter password" type="password" />


            </div>
            <Link to={'/'}>
              <button className="submit" type="submit">
                Sign in
              </button>
            </Link>

            <p className="signup-link">
              No account?
              <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>

      </>
    </div>
  )
}

export default Login