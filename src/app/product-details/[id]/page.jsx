"use client"

import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image.js";
import { arrData } from "app/(home)/myProduct";
import {motion} from 'framer-motion'

const Page =  ({ params }) => {

  const objData = arrData.find((item) => {
    return item.id == params.id
  })


  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
        paddingTop:'30px'
      }}
    >
      
      <motion.main
      
      initial={{
        y:'-100vh'
      }}

      animate={{
        y:0
      }}
      transition={{
        damping:5,
        type:'spring',
        duration:.5,
        delay:.5
      }}
      style={{ textAlign: "center"}} className="flex">
        <Image
        
        
         width={266}  height={270} quality={100}  alt="" src={`${objData.productImg}`} />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{objData.title}</h2>
            <p className="price">${objData.price}</p>
          </div>
          <p className="description">{objData.description}</p>
          <button className="flex add-to-cart">
            <FontAwesomeIcon style={{ width: "1.1rem" }} icon={faCartPlus} />
            Add To Cart
          </button>
        </div>
      </motion.main>

    </div>
  );
};

export default Page;
