import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Users = (props) => {
    const {id, name, address, image, email} = props;

    const deleteContact = (id) => {
      if(window.confirm(`Do you want to delete the records of ${id}`)){
         axios.delete(`/contacts/${id}`).then(res=>{
            toast.success('Successfully Deleted');
            setTimeout(()=>{window.location.reload()}, 4000);
        }).catch(error => toast.error(error.message));
      } else {
          toast.warning("Delete Terminated")     
      }

    }
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card my-3 shadow">
            <img src={image} alt="" className="img-fluid shadow rounded" style={{height:'300px', width:'100%'}}/>
            <div className="card-body text-secondary">
                <h3 className='text-center'>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Email : </b>
                        <span className='float-end'>{email}</span>
                    </li>
                    <li className='list-group-item'>                
                        <b>Address : </b>
                        <span className='float-end'>{address}</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
            <NavLink className='text-outline-secondary' to={`/update/${id}`}><i className="bi bi-pencil-square h3"></i></NavLink>
                <NavLink className='float-end text-secondary' onClick={()=>{deleteContact(id)}}><i class="bi bi-trash3-fill h3"></i></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Users