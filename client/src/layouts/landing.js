import React from 'react'

const Landing = () => {

    


    return(
    <div className="login-wrapper col-6">
        <form className="border mx-auto signup-form bg-light shadow p-3">
            <div className="form-group my-3">
                <label htmlFor="username-signup" className="text-primary">Username: </label>
                <input className="form-input w-100 px-2" type="text" id="username-signup" />
            </div>
            <div className="form-group my-3 ">
                <label htmlFor="email-signup" className="text-primary">Email:</label>
                <input className="form-input w-100 px-2" type="text" id="email-signup" />
            </div>
            <div className="form-group my-3">
                <label htmlFor="password-signup" className="text-primary">Password:</label>
                <input className="form-input w-100 px-2" type="password" id="password-signup" />
            </div>
            <div className="form-group d-flex justify-content-center">
                <button className="btn btn-primary w-20 submit-button" type="submit">Sign Up</button>
            </div>
        </form>
    </div>
    )
}
export default Landing;

