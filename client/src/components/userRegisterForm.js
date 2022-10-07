import React, { useState } from "react";
import { useForm } from 'react-hook-form'

const UserForm = () => {
    const { register, handleSubmit, watch, formState } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    // console.log(watch("first-name"))

    return (
         <form onSubmit={handleSubmit(onSubmit)} className="form-group w-50" style={{margin: "auto"}}>
            <label htmlFor="first-name">First Name: </label>
            <input {...register("first-name", {required: true})} id="first-name" className="form-control"/>
            <label htmlFor="last-name">Last Name</label>
            <input {...register("last-name", {required: true})} id="last-name" className="form-control"/>
            <label htmlFor="email">Email: </label>
            <input {...register("email", {required: true})} id="contact-email" className="form-control"/>
            <input type="submit" className="btn btn-success mt-3 mx-auto" />
        </form>

    )

}

export default UserForm;
