import React from "react";
import Photo1 from "../../../src/photos/projects/Screenshot 2022-06-09 221404.png";
import Photo2 from "../../../src/photos/projects/cycle2.png";
import Photo3 from "../../../src/photos/projects/cycle3.png";
import Photo4 from "../../../src/photos/projects/cycle4.png";
import Photo5 from "../../../src/photos/projects/cycle5.png";

const CycleProject = () => {
  return (
    <div className="bg-base-200">
      <div className="mx-4 md:mx-12 lg:mx-20">
        <h1 className="text-center text-primary text-4xl font-semibold my-4">
          Cycle Gear
        </h1>
        <h3 className="text-2xl font-semibold my-4 mx-2">Links</h3>
        <a
          className="mx-2 mt-2 bg-primary text-white p-2 rounded-lg "
          href="https://cyele-parts.web.app/"
          rel="noreferrer"
          target={"_blank"}
        >
          Live Site
        </a>
        <a
          className="mx-2 mt-2 bg-primary text-white p-2 rounded-lg "
          href="https://github.com/Omarfaruk05/cycle-gear-client-as-12"
          target={"_blank"}
          rel="noreferrer"
        >
          GitHub Client Side Code
        </a>
        <a
          className="mx-2 mt-2 bg-primary text-white p-2 rounded-lg "
          href="https://github.com/Omarfaruk05/cycle-gear-server-as-12"
          target={"_blank"}
          rel="noreferrer"
        >
          GitHub Server Side Code
        </a>
        <h3 className="text-2xl font-semibold my-4 mx-2">Technology</h3>
        <div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>React</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>Node Js</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>Express Js</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>MongoDB</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>Stripe</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>Firebase</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>React-router-dom</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>React-hook-forms</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>DotENV</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>Tailwind CSS</span>
          </div>
          <div className="bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1">
            <span>Daisy UI</span>
          </div>
        </div>
        <div>
          <h2 className="text-center text-primary text-3xl font-semibold mt-4">
            Details
          </h2>
        </div>
      </div>
      <div className="mx-4 my-16 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg">
        <div>
          <img className="rounded-lg" src={Photo1} alt="" />
        </div>
        <div className=" mt-4 mx-4">
          <ul className=" list-disc text-xl text-primary">
            <li>There has a responsive navigation menu.</li>
            <li>
              There every menu link work properly and when you click this link
              you go different page.
            </li>
            <li>There has a solid fixed background and some usefull text.</li>
          </ul>
        </div>
      </div>
      <div className="mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg">
        <div>
          <img className="rounded-lg" src={Photo2} alt="" />
        </div>
        <div className=" mt-4 mx-4">
          <ul className=" list-disc text-xl text-primary">
            <li>This is the pricing table.</li>
            <li>
              For hire button in the pricing table card is clickable and by
              clicking this button you can go pricing details route which route
              is protected (Without login you cannot go.)
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg">
        <div>
          <img className="rounded-lg" src={Photo3} alt="" />
        </div>
        <div className=" mt-4 mx-4">
          <ul className=" list-disc text-xl text-primary">
            <li>
              This is the product details page. Where you can see detail
              information fo produts and purchase products. Here Available
              quantity is dynamic.
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg">
        <div>
          <img className="rounded-lg" src={Photo4} alt="" />
        </div>
        <div className=" mt-4 mx-4">
          <ul className=" list-disc text-xl text-primary">
            <li>This is the admin pannel. Only admin can see this page.</li>
            <li>An admin can modify many products information.</li>
            <li>An admin also make a admin by clicking make admin button.</li>
          </ul>
        </div>
      </div>
      <div className="mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg">
        <div>
          <img className="rounded-lg" src={Photo5} alt="" />
        </div>
        <div className=" mt-4 mx-4">
          <ul className=" list-disc text-xl text-primary">
            <li>
              This is the user pannel. Here a user can see their order
              information.
            </li>
            <li>They can pay money of their purchased products.</li>
            <li>Stripe is used for payment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CycleProject;
