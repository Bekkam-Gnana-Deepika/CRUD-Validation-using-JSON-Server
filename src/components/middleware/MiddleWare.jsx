import axios from 'axios';
import { omit } from 'lodash';
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Create Random User ID
const randomId = () => {
    return Math.floor( Math.random() * 1000);
}

// Initial Object
const initState = {
    id:"",
    name: "",
    email: "",
    image: "",
    mobile: "",
    address: "",   
};
const MiddleWare = () => {
    const [contact, setContact] = useState(initState);
    //console.log("Contact", contact);

    const [errors, setErrors] = useState({});
    //console.log("Error", errors);

    // Read Value from Create Component
    const readValue = (e) => {
        //console.log("Parameter Value = ", e);
        const {name, value} = e.target;
        validate(e, name, value);
        setContact({...contact, [name]: value });
    }

    // Validate Function
    const validate = (event, name, value) => {
        switch (name) {
            case "name":
                if(value.length === 0){
                    errorPrint(name, "Please Enter the Data");
                } else if(value.length < 3) {
                    errorPrint(name, "Name at least have 3 letter.");
                } else if (!new RegExp(/^[a-zA-Z\s]+$/).test(value)){
                    errorPrint(name, "Invalid");
                } else {
                    let loadash = omit(errors, name);
                    setErrors(loadash);
                }
                break;

                case "email":
                    if (value.length === 0) {
                        errorPrint(name, "Email field must be filled.");
                    } else if (!new RegExp(/^[a-zA-z0-9\S]+@[a-zA-Z\S]+\.[a-zA-Z\S]+$/).test(value)) {
                        errorPrint(name, "Invalid Email Format.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
                break;

                case "image":
                    if (value.length === 0) {
                        errorPrint(name, "Image field must be filled.");
                    } else if (!new RegExp(/^\S+$/).test(value)) {
                        errorPrint(name, "Invalid Image URL.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
                break;

                case "mobile":
                    if (value.length === 0) {
                        errorPrint(name, "Mobile field must be filled.");
                    } else if (!new RegExp(/^[6-9]\d{9}$/).test(value)) {
                        errorPrint(name, "Invalid Mobile Number.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
                break;

                case "address":
                    if (value.length === 0) {
                        errorPrint(name, "Address field must be filled.");
                    } else if (
                        !new RegExp(/^([a-zA-z0-9/\\''(),-/#\s]{2,255})$/).test(value)) {
                        errorPrint(name, "Invalid Address.");
                    } else {
                        let loadash = omit(errors, name);
                        setErrors(loadash);
                    }
                break;


            default:
                break;
        }
    }

    // Printing Error Message
   const errorPrint = (prop, msg) => {
        setErrors({...errors, [prop] : msg});
   }

   const navigate = useNavigate();

   // Submitting Data to the server
   const submitData = async (e) => {
    e.preventDefault();
    if(Object.keys(errors).length === 0 && Object.keys(contact).length !== 0){
       // console.log("Submit", contact);
        // Make API call to server here\
        
            contact.id = randomId();
        await axios.post('/contacts', contact).then(res =>{
            toast.success("New User Created");
            navigate('/');
        }).catch((error)=>toast.error(error.message));
    } else {
        toast.error("Please Fill All Fields Properly");
        // Reset Form
        setContact(initState);
        setErrors({});
    }

  }

    return {contact, setContact, readValue, errors, submitData}
}

export default MiddleWare;