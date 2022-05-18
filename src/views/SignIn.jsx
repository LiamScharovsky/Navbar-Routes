import React from 'react';

export const SignIn = () => {
return (
    <div className='row'>
        <div className='col-md-6'>
            <h2>Sign In</h2>
            <hr />
            <form action="">
                <div className="form-group">
                    <input type="email" className='form-control' name="email" aria-describedby='helpId' placeholder='Email' />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' name="email" aria-describedby='helpId' placeholder='Password' />
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <label className='form-check-label'>
                            <input type="checkbox" className='form-check-inut' name='rememberMe' value="checkedValue" />
                                Remember Me
                        </label>
                    </div>
                </div>
                <input name="" id="" className="btn btn-primary" type="submit" value="Log In"/>
            </form>
        </div>
        <div className='col-md-6'>
            <h2>Register</h2>
            <hr />
            <form action="">
                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className='form-control' name="firstName" aria-describedby='helpId' placeholder='First Name' />                    
                        </div>
                        <div className="col-6">
                            <input type="text" className='form-control' name="lastName" aria-describedby='helpId' placeholder='Last Name' />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className='form-control' name="email" aria-describedby='helpId' placeholder='Email' />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' name="password" aria-describedby='helpId' placeholder='Password' />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' name="confirmPassword" aria-describedby='helpId' placeholder='Confirm Password' />
                </div>
                <input name="" id="" className="btn btn-success" type="submit" value="Sign Up" />
            </form>
        </div>

    </div>
)   

}