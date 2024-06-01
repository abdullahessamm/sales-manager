export default {
    fName: {
        type: String,
        required: [true, 'first name is required.'],
        minlength: [2, 'too short first name.'],
        maxlength: [30, 'too long first name.']
    },
    lName: {
        type: String,
        required: [true, 'last name is required.'],
        minlength: [2, 'too short first name.'],
        maxlength: [30, 'too long first name.']
    },
    email: {
        type: String,
        required: [true, 'email is required.']
    },
    age: Number
}
