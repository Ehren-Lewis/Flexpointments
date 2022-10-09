import React, { useState } from "react";
import { useForm } from 'react-hook-form'

const UserForm = () => {
    const { register, handleSubmit, watch, formState } = useForm();
    const onSubmit = data => {
        console.log(data);

        if (data["contact-password"] != data["contact-confirm-password"]) {
            console.log('hello')
        }
    }

    const watchAllFields = watch();

    // console.log(watch("first-name"))

    return (
         <form onSubmit={handleSubmit(onSubmit)} className="form-group w-50" style={{margin: "auto"}}>
         <div className="row">
         <div className="col-6">
            <label htmlFor="first-name">First Name: </label>
            <input {...register("first-name", {required: true})} id="first-name" className="form-control"/>
        </div>
        <div className="col-6">
            <label htmlFor="last-name">Last Name</label>
            <input {...register("last-name", {required: true})} id="last-name" className="form-control"/>
        </div>
        </div>
            <label htmlFor="email">Email: </label>
            <input {...register("email", {required: true})} id="contact-email" className="form-control"/>
        <div className="row">
            <div className="error"></div>
        </div>
            <label htmlFor="contact-password">Password: </label>
            <input {...register("contact-password", {required: true})} id="contact-password" type="password" className="form-control"/>
            <label htmlFor="contact-password">Confirm Password: </label>
            <input {...register("contact-confirm-password", {required: true})} id="contact-confirm-password" type="password" className="form-control"/>
            <input type="submit" className="btn btn-success mt-3 mx-auto" />
        </form>

    )

}

export default UserForm;
