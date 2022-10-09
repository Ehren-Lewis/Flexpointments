// Ussers is designed for the individual client side
// TThis

// Users can favorite or set a default barber shop or tattoo shop

const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

const emailRegEx  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const validateEmail = (email) => {
    return emailRegEx.test(email)
}



// User schema only has the information needed for signing up and logging in
// Appointments may be a single reference to the next appointment
// I don't think I need to add a through table


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, "Input a proper email please"]
    },
    password: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

userSchema.pre( "save", async function (next) {
    if ( this.isNew || this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    next();
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const Users = model("Users", userSchema);

module.exports = Users;
