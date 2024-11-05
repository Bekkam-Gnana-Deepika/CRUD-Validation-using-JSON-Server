import React, { useRef } from 'react'
import { registerUser } from './Storage';

const Register = () => {

    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const password = useRef();

    // Register
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(name.current);
        // console.log(name.current.value);

        // JSON FORMAT
        const data = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            password: password.current.value
        }
        //console.table(data);
        await registerUser(data);
    }
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                <div className="card shadow">
                    <div className="card-header bg-secondary shadow">
                        <h1 className="text-white text-center">REGISTER</h1>
                    </div>
                    <div className="card-body">
                       <form autoComplete='off' onSubmit={handleSubmit}>
                       <div className="form-group my-3">
                            <label htmlFor="name">Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter name"
                            required 
                            ref={name}/>       
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            required 
                            ref={email}/>       
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            className="form-control"
                            placeholder="Enter mobile number"
                            required 
                            ref={mobile}/>       
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password">Password</label>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            required 
                            ref={password}/>       
                        </div>
                        <div className="form-group my-3">
                           <button
                           type="submit"
                           className="btn btn-outline-success btn-block">
                            Register
                            </button>      
                        </div>

                        </form> 
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Register