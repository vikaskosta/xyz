import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstname:Yup.string().min(2).max(10).required("Please Enter Your FirstName"),
    lastname:Yup.string().min(2).max(10).required("Please Enter Your LastName"),
    email:Yup.string().email().required("Please Enter Your email"),
    password:Yup.string().min(6).required("Please Enter Your Password")
});