import React from 'react'
import MiddleWare from '../middleware/MiddleWare';

const Create = () => {

    const {contact, readValue, errors, submitData} = MiddleWare();

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                <div className="card shadow">
                    <div className="card-header bg-secondary shadow">
                        <h1 className="text-white text-center">CREATE USER</h1>
                    </div>
                    <div className="card-body">
                        <form autoComplete='off' onSubmit={submitData}>
                            <div className="form-group my-3">
                                <label htmlFor="name">Name</label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                required 
                                minLength={4}
                                maxLength={10}
                                value={contact.name} //contact.name = "User Name"
                                onChange={readValue}
                                />
                                {
                                    errors.name && <div className="alert alert-danger">{errors.name}</div>
                                }
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                required 
                                //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                value={contact.email}
                                onChange={readValue}
                                />
                                {
                                    errors.email && <div className="alert alert-danger">{errors.email}</div>
                                }
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="image">Profile Image</label>
                                <input
                                type="url"
                                id="image"
                                name="image"
                                className="form-control"
                                placeholder="Enter url format of image link"
                                required 
                                //pattern="https?://.+"
                                value={contact.image}
                                onChange={readValue}
                                />
                                {
                                    errors.image && <div className="alert alert-danger">{errors.image}</div>
                                }
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="mobile">Mobile</label>
                                <input
                                type="number"
                                id="mobile"
                                name="mobile"
                                className="form-control"
                                placeholder="Mobile Number"
                                required 
                                value={contact.mobile}
                                onChange={readValue}
                                />
                                {
                                    errors.mobile && <div className="alert alert-danger">{errors.mobile}</div>
                                }
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="address">Address</label>
                                <textarea
                                id="address"
                                name="address"
                                className="form-control"
                                placeholder="Enter your address"
                                required 
                                value={contact.address}
                                onChange={readValue}
                                />
                                {
                                    errors.address && <div className="alert alert-danger">{errors.address}</div>
                                }
                                <div className="form-group my-3">
                                    <input type="submit" value="Create" className="btn btn-outline-secondary"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create;