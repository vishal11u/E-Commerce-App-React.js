import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products = [] }) => {
  return (
      <section className="text-gray-600 body-font ">
        <div className="container px-10 md:px-32 pt-16 pb-34  mx-auto ">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              console.log(product, "product");
              const { id, title, price, category, image } = product;

              return (
                <div className="lg:w-1/4 md:w-1/2 p-4  w-full border rounded-lg mb-5 transition-all hover:bg-gray-100 ">
                  <p className="bg-indigo-600 text-white w-8 rounded-full text-center object-center">
                    {id}
                  </p>
                  <a
                    href="##"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt={title}
                      className=" object-contain  object-center w-full h-full block transition-all hover:bg-slate-100"
                      src={image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-xl font-bold ">
                      {title}
                    </h2>
                    <p className="mt-1 text-gray-500 pb-1 text-md font-semibold ">
                      $ {price}
                    </p>
                    <Link to={`/cart/${id}`} className="py-1 bg-indigo-700 text-white pl-2 pr-2 rounded hover:bg-slate-500 ">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default Products;