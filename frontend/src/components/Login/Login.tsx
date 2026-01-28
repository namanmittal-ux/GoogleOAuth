import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";

// const clientid=process.env.client_id
const Login = () => {

const [loginData,setLoginData]=useState(null)


  const handleLogin=async (details)=>{
  // const userData = jwtDecode(details);
  //     console.log(userData);
    try {
    const res = await fetch("http://localhost:3000/api/login",
      {
        method:"POST",
        body:JSON.stringify({token:details}),
          headers: { "Content-Type": "application/json" },
      })
       if(!res.ok){
            throw Error("Lgoin Failed!")
      }

      const data= await res.json()
      setLoginData(data)
  } catch (error) {
    console.log("error pencho",error)
  }

  }
  return (
   <GoogleLogin
  onSuccess={credentialResponse => {
    // console.log(credentialResponse);
    handleLogin(credentialResponse.credential)
  }}
  onError={() => {
    console.log('Login Failure');
  }}
/>
  )
}

export default Login