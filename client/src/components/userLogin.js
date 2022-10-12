import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN_USER } from "../utils/mutations"
import AuthService from "../utils/Auth";
const UserLogin = () => {
    const [loginForm, setLoginForm ] = useState({
        email: "",
        password: ""
    });

    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const onChange = (e) => {
        const key = e.target.id;
        setLoginForm({...loginForm, [key]: e.target.value});


    }

    const submit = async (e) => {
        console.log(loginForm);
        // loginUser({variables: {email: loginForm.email, password: loginForm.password}});
        //   loginUser({variables: { email: loginForm.email, password: loginForm.password} });
        try {
        const { data } = await loginUser({
            variables: {email: loginForm.email, password: loginForm.password}
        })
        // console.log(data.loginUser.token);
        AuthService.setLogin(data.loginUser.token);


    }
    catch (err) {
        console.log(err)
    }
        // const { loading, error, data } = useMutation({email: loginForm.email, password: loginForm.password});
    }


    return( 

        // <form onSubmit={e => {
        //     e.preventDefault();
        //     handleSubmit(e);
        <form onSubmit={e =>  {e.preventDefault(); submit(e)}} className="form-group w-50 m-auto">
         {/* }} className="form-group w-50" style={{margin: "auto"}}> */}
            <label htmlFor="email">Email: </label>
            <input id="email" onChange={onChange} className="form-control"/>

            <label htmlFor="password">Password: </label>
            <input  id="password" type="password" onChange={onChange} className="form-control"/>
            <input type="submit" className="btn btn-success mt-3 mx-auto" onSubmit={e => {e.preventDefault(); submit(e);}}/>
        </form>


    
    )
}

export default UserLogin;