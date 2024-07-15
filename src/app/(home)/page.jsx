"use client"

import { Suspense } from "react";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import "./home.css";
import Products from "./products.jsx";
import Loading from "./loading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'

export default function Home() {
  const text= "Lifestyle collection"
  const text2= ""
  return (
    <>


      <div className="top-img">
    
        <section className="content">
          <p className="lifestyle" >

  <strong style={{color:'#fff'}}>Get Free Shipping <br/>on orders over<br/> $99.00</strong>
 
          </p>
          <p className="men">MEN</p>
          <p className="sale" style={{color:'#fff'}}>
            SALE UP TO <span>30% OFF</span>
          </p>
          <motion.p className="free-shipping">
          {
  text2.split(" ").map((char)=>(
    <motion.span
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}

 transition={{
  type:'spring',
  duration:0.05,
  stiffness:140,
  delay:.5
 }}
    >
      {char}
    </motion.span>
  ))
}
          </motion.p>
          <motion.button
             initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
        
         transition={{
          type:'spring',
          duration:0.05,
          stiffness:140,
          delay:.5
         }}
          
          
          
          >Shop Now</motion.button>
        </section>
      </div>

      <main>
        <h1 className="recommended flex">
          <FontAwesomeIcon
            style={{ width: "1.9rem", marginRight: "1.2rem" }}
            icon={faCheck}
          />
          Recommended for you
        </h1>

        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </main>

     
    </>
  );
}
