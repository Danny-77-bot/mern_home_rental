import React, { useState } from 'react'
import '../styles/register.sass';
import home from '../assets/home.jpeg';
export default function Register() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    Password:"",
    confirmPassword:"",
    profileImage:null
  })
  const handleChange=(e)=>{
    const {name,value,files}=e.target;
   setFormData({
    ...formData,
    [name]:value,
    [name]:name==="profileImage"?files[0]:value
   })
  }
  return (
    <div className='register'>
     <div className="register-content">
       <form>
        <input 
        placeholder='First Name'
        name='firstname'
        value={formData.firstName}
        onChange={handleChange}
        required
        />
        
         <input 
        placeholder='Last Name'
        name='lastname'
        value={formData.lastName}
        onChange={handleChange}
        required
        />
         <input 
        placeholder='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        required
        />
         <input 
        placeholder='Password'
        name='password'
        type='password'
        value={formData.Password}
        onChange={handleChange}

        required
        />
         <input 
        placeholder='Confirm password'
        name='confirmpassword'
        type='password'
        value={formData.confirmPassword}
        onChange={handleChange}

        required
        />
        <input 
        id='image'
        type='file' name='profileImage'
         style={{display:'none'}}
         value={formData.files}
         onChange={handleChange}
          accept='image/*' required/>
          <label htmlFor='image'>
            <img src={home} alt="add profile Photo"/>
            <p>Upload Your Photo</p>
            {formData.profileImage && (
              <img 
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{maxWidth:"80px"}}
               />
            )}
          </label>
          <button type='submit'>REGISTER</button>
        </form> 
        <a href="/login">Already have an account?log in here</a>
     </div>
    </div>
  )
}
