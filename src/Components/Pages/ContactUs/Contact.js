import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
 import './Contact.css'

const Contact = () => {

    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    // const [phone,setPhone]=useState('');


    // const nameHandler=(e)=>{
    //     setName(e.target.value);
    // };

    // const emailHandler=(e)=>{
    //     setEmail(e.target.value);
    // };

    // const phoneHandler=(e)=>{
    //     setPhone(e.target.value);
    // };
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:""

    });
let name,value
    const getUserData=(event)=>{
        name=event.target.name;
        value=event.target.value

        setUser({...user,[name]:value});

    }

    async function contactHandler(e){
        e.preventDefault();
        let data ={
            'name':user.name,
            'email':user.email,
            'phone':user.phone
        }
        const response= await fetch('https://ecommercewebsite-e1437-default-rtdb.firebaseio.com/contact.json',{
            method:'POST',
            body:JSON.stringify(data),
            header:{
                'Content-Type':'application/json'
            }
        });
        const datas= await response.json();
        console.log(datas);
    setUser({
        name:"",
        email:"",
        phone:""
    });
    alert("data stored succesfully");
     }

  return (
   
    <Fragment>
<div className='contact-container' >

<Form>
    <div className='contact'>
<Form.Group className="mb-3" controlId="formGroupName">
<Form.Label>Name</Form.Label>
<Form.Control name="name" value={user.name} onChange={getUserData} type="text" placeholder="Enter Your Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label>Email address</Form.Label>
<Form.Control name="email" value={user.email} onChange={getUserData} type="email" placeholder="Enter email" />
</Form.Group>

<Form.Group className="mb-3" controlId="formGroupPhone">
<Form.Label>Phone No.</Form.Label>
<Form.Control name="phone" value={user.phone} onChange={getUserData} type="number" placeholder="Enter Phone No." />
</Form.Group>
<Button onClick={contactHandler} variant="primary" type="submit">
Submit
</Button>
</div>
</Form>

</div>
    </Fragment>
  )
}

export default Contact;
