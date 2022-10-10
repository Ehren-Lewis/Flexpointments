import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS, CREATE_USER } from "../utils/queries";





// const UserForm = () => {

//     const createUser = (props) => {

//         const { loading, err, data } =  useMutation(CREATE_USER, {variables: {firstName: props.firstName, lastName: props.lastName, email: props.contactEmail, password: props.contactPassword}})    
    
//         return data;
//     }
    
//     const { register, handleSubmit, watch, formState } = useForm();
//     const onSubmit = info => {
//         console.log(info);

//         if (info["contactPassword"] != info["contactConfirmPassword"]) {
//             console.log('hello');
//             return;
//         }

//         const individual = createUser({firstName: info.firstName, lastName: info.lastName, contactEmail: info.contactEmail, contactPassword: info.contactPassword});

//         console.log(individual);
//     }

//     const watchAllFields = watch();

//     // console.log(watch("first-name"))

//     return (
//          <form onSubmit={handleSubmit(onSubmit)} className="form-group w-50" style={{margin: "auto"}}>
//          <div className="row">
//          <div className="col-6">
//             <label htmlFor="first-name">First Name: </label>
//             <input {...register("first-name", {required: true})} id="first-name" className="form-control"/>
//         </div>
//         <div className="col-6">
//             <label htmlFor="last-name">Last Name</label>
//             <input {...register("last-name", {required: true})} id="last-name" className="form-control"/>
//         </div>
//         </div>
//             <label htmlFor="email">Email: </label>
//             <input {...register("email", {required: true})} id="contactE mail" className="form-control"/>
//         <div className="row">
//             <div className="error"></div>
//         </div>
//             <label htmlFor="contact-password">Password: </label>
//             <input {...register("contactPassword", {required: true})} id="contact-password" type="password" className="form-control"/>
//             <label htmlFor="contact-password">Confirm Password: </label>
//             <input {...register("contactConfirmPassword", {required: true})} id="contact-confirm-password" type="password" className="form-control"/>
//             <input type="submit" className="btn btn-success mt-3 mx-auto" />
//         </form>



//     )

// }

// export default UserForm;

const UserForm = () => {


    // console.log(watch("first-name"))

    const [form, setForm ] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": ""
    });

    let input;
    const [addUser, { loading, error, data }] = useMutation(CREATE_USER);

    const onChange = (e) => {
        const key = e.target.id;
        setForm({...form, [key]: e.target.value});

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { loading, err, data } =  useMutation(CREATE_USER, {variables: {firstName: form.firstName, lastName: form.lastName, email: form.contactEmail, password: form.contactPassword}});
        console.log(data    )  
    }

    return (
         <form onSubmit={e => {
            e.preventDefault();
            addUser({variables: {firstName: form.firstName, lastName: form.lastName, email: form.email, password: form.password} });
         }} className="form-group w-50" style={{margin: "auto"}}>
         <div className="row">
         <div className="col-6">
            <label htmlFor="firstName">First Name: </label>
            <input  id="firstName" onChange={ onChange} className="form-control"/>
        </div>
        <div className="col-6">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" onChange={onChange} className="form-control"/>
        </div>
        </div>
            <label htmlFor="email">Email: </label>
            <input id="email" onChange={onChange} className="form-control"/>

            <label htmlFor="password">Password: </label>
            <input  id="password" type="password" onChange={onChange} className="form-control"/>
            <label htmlFor="confimPassword">Confirm Password: </label>
            <input  id="confirmPassword" type="password" className="form-control"/>
            <input type="submit" className="btn btn-success mt-3 mx-auto" onSubmit={onSubmit}/>
        </form>



    )

}

export default UserForm;
