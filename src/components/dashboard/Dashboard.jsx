import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Users from '../users/Users';

const Dashboard = () => {
  const [contacts, setContact] = useState([]);

  // Fetch data from API
  const getContacts = async () => {
    await axios.get(`/contacts`).then(res=>{
      //console.log(res.data);
      setContact(res.data);
    }).catch((error) => toast.error(error.message));
  }

  useEffect(()=>{ getContacts() },[]);

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col">
                <h1 className="text-secondary text-center">USERS</h1>
            </div>
        </div>
        <div className="row">
          {
            contacts.map((contact, index) => {
              return(<Users {...contact} key={index} />)
            })
          }
        </div>
    </div>
  )
}

export default Dashboard;