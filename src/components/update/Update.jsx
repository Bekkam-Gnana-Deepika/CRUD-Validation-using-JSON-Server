import React, { useEffect } from 'react'
import MiddleWare from '../middleware/MiddleWare'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
  const {contact, setContact, errors, readValue} = MiddleWare();

  const params = useParams();

  useEffect(()=>{
    axios.get(`/contacts/${params.id}`)
    .then((res) => {
      console.log(res.data);
      setContact(res.data);
    })
    .catch(error => toast.error(error.message))
  }, []); 

  const navigate = useNavigate();

  let updateHandler = async (e) => {
    e.preventDefault();
    if(Object.keys(errors).length === 0  && Object.keys(contact).length !== 0){
      //console.log("Submit", contact);
      await axios.patch(`/contacts/${params.id}`, contact).then(res=>{
        toast.success("User Updated");
        navigate(`/`)
      }).catch((error)=>toast.error(error.message));
    } else {
      toast.error("Please Fill All Fields Properly");
    }
  }

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="card shadow">
            <div className="card-header bg-secondary shadow">
              <h1 className="text-white text-center">UPDATE USER</h1>
            </div>
            <div className="card-body">
              <form action="" onSubmit={updateHandler}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                    required
                    minLength={4}
                    maxLength={20}
                    value={contact.name}
                    onChange={readValue}
                  />
                  {
                    errors.name && <div className="alert alert-danger">{errors.name}</div>
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="username@domain.com"
                    required
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
                    required
                    placeholder="Enter url format of image link"
                    value={contact.image}
                    onChange={readValue}/>
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
                    placeholder="Enter mobile number"
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
                    placeholder="Enter address"
                    required
                    value={contact.address}
                    onChange={readValue}
                  />
                  {
                    errors.address && <div className="alert alert-danger">{errors.address}</div>
                  }
                </div>
                <div className="form-group">
                  <input type="submit" value="Update" className="btn btn-outline-secondary"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update