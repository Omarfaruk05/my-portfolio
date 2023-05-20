import React from "react";
import BestProject1 from "../../../src/photos/projects/Screenshot 2022-06-09 221404.png";
import BestProject2 from "../../../src/photos/projects/Screenshot 2022-06-09 234739.png";
import BestProject3 from "../../../src/photos/projects/photography1.png";
import BestProject4 from "../../../src/photos/projects/e-mart.png";
import BestProject5 from "../../../src/photos/projects/friendly.png";
import BestProject6 from "../../../src/photos/projects/fale_shop.png";
import { Link } from "react-router-dom";

const BestProjects = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-4 font-semibold text-primary">
        Best Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:mx-40 md:mx-12  mx-4 ">
        <div className=" rounded-lg shadow-xl">
          <div className="p-2">
            <img className="rounded-lg" src={BestProject4} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-1 text-primary">E-Mart</h2>
            <p>
              This is an MERN stack project. There have login and registration
              section by using firebase. There has some portected route where
              user cannot go without login.Thare has a dashboard where a admin
              and a client has different access.
            </p>
          </div>
          <div className="w-full text-center ">
            <button className="btn btn-primary my-2 px-8 hover:underline">
              {" "}
              <a
                href="https://heartfelt-tiramisu-5729e5.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                Live link
              </a>
            </button>
          </div>
        </div>
        <div className=" rounded-lg shadow-xl">
          <div className="p-2">
            <img className="rounded-lg" src={BestProject1} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-1 text-primary">
              Cycle Gear
            </h2>
            <p>
              This is an MERN stack project. There have login and registration
              section by using firebase. There has some portected route where
              user cannot go without login.Thare has a dashboard where a admin
              and a client has different access.
            </p>
          </div>
          <div className="w-full text-center ">
            <Link to={"/cycleProject"}>
              <button className="btn btn-primary my-2 px-8">Details</button>
            </Link>
          </div>
        </div>
        <div className=" rounded-lg shadow-xl">
          <div className="p-2">
            <img className="rounded-lg" src={BestProject2} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-1 text-primary">
              Electro Mart
            </h2>
            <p>
              This is an MERN stack project. There have login and registration
              section by using firebase. There has some portected route where
              user cannot go without login. There user can update product
              quanitiy.
            </p>
          </div>
          <div className="w-full text-center ">
            <Link to={"/electroProject"}>
              <button className="btn btn-primary my-2 px-8">Details</button>
            </Link>
          </div>
        </div>
        <div className=" rounded-lg shadow-xl">
          <div className="p-2">
            <img className="rounded-lg" src={BestProject3} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-1 text-primary">
              Fr Photography
            </h2>
            <p>
              This is a react application. There has a sliding carusel. There
              have login and registration section by using firebase. There has
              some portected route where user cannot go without login. There has
              a beautifull comment card with ratting.{" "}
            </p>
          </div>
          <div className="w-full text-center ">
            <Link to={"/photographyProject"}>
              <button className="btn btn-primary my-2 px-8">Details</button>
            </Link>
          </div>
        </div>
        <div className=" rounded-lg shadow-xl">
          <div className="p-2">
            <img className="rounded-lg" src={BestProject5} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-1 text-primary">
              Cycle Gear
            </h2>
            <p>
              This is an MERN stack project. There have login and registration
              section by using firebase. There has some portected route where
              user cannot go without login.Thare has a dashboard where a admin
              and a client has different access.
            </p>
          </div>
          <div className="w-full text-center ">
            <button className="btn btn-primary my-2 px-8 hover:underline">
              <a
                href="https://friendly-blond.vercel.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                Live link
              </a>
            </button>
          </div>
        </div>
        <div className=" rounded-lg shadow-xl relative">
          <div className="p-2">
            <img className="rounded-lg" src={BestProject6} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-2xl font-semibold mb-1 text-primary">
              Fake Shop
            </h2>
            <p>
              This is an React front-end project. There have login and
              registration section by using firebase. There has some portected
              route where user cannot go without login.Thare has a dashboard
              where a admin and a client has different access.
            </p>
          </div>
          <div className="w-full text-center absolute">
            <button className="btn btn-primary my-2 px-8 hover:underline">
              {" "}
              <a
                href="https://fake-shop-sooty.vercel.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                Live link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProjects;
