import React from 'react';

import './reg.css'
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
       Registar Using User name and email
      </h4>
    </div>
    <div className="form">
      <input
        type="text"
        className="form-field animation a3"
        placeholder="User Name"
      />
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
      Alrady have Account ?

        <Link href="/signin" className="animation a5">Login</Link>
    </p>
  </div>
  <div className="right" />
</div>

  );
}

export default Page;
