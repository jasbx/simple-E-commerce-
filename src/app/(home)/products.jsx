import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image.js";
import { arrData } from "./myProduct";

const Products = async () => {


  return (
    <section className="products flex">
      {arrData.map((item) => {
        return (
          <article title={item.title} key={item.id} className="card">
            <Link href={`/product-details/${item.id}`}>
              <Image
                quality={100}
                width={266}
                height={260}
                src={item.productImg}
                alt=""
              />
            </Link>
            <div style={{ width: "266px" }} className="content">
              <h1 className="title">{item.title.slice(0, 15)}...</h1>
              <p className="description">
                {item.description.slice(0, 111)}....
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">${item.price}</div>
                <button className="add-to-cart flex">
                  <FontAwesomeIcon
                    style={{ width: "1rem" }}
                    icon={faCartPlus}
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
