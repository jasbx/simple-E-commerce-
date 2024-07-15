import React from 'react';

import './sign.css'
import Link from 'next/link';


export const metadata = {
  title: 'Register page',
  description: 'description for Register page',

}
const Page = () => {
  return (
<div className="container">
  
  <div className="left">
    <div className="header">
      <h2 className="animation a1">Welcome Back</h2>
      <h4 className="animation a2">
       Login Using   email and Password
      </h4>
    </div>
    <div className="form">
   
      <input
        type="email"
        className="form-field animation a3"
        placeholder="Email Address"
      />
      <input
        type="password"
        className="form-field animation a4"
        placeholder="Password"
      />

      <button className="animation a6">Registar</button>
    </div>
    <p style={{paddingTop:'5px'}}>
      You dont have a Account ?

        <Link href="/register" className="animation a5">Login</Link>
    </p>
  </div>
 
  <div className="right" />
</div>

  );
}

export default Page;
