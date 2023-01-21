import React, { Fragment } from 'react'
import '../login/Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
      <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Shredda</h3>
                <span className="logindesc">Connect with friends & people around the world.</span>
            </div>

            <div className="loginright">
                <div className="loginbox">
                    <div className="bottom">
                        <form className="bottombox">
                            <input type="text" placeholder='Email' 
                            id='email'
                            className='logininput' required/>

                            <input type="password" placeholder='Password'
                             id='password' className='logininput' required/>
                            <button className="loginbtn" type='submit'>Sign In</button>
                            <Link to="/register"><button className="loginregisterbtn">Create a new account</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
