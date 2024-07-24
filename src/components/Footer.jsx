import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-4  pb-2  " id="contact">
      <div className=" container-wrapper relative  ">
        <img src="images/g3.png" alt=""  className=" mx-auto"/>
        <div className=" relative   px-[8%] mx-auto left-0 right-0 ">
          <div className=" flex justify-center items-center flex-col sm:flex-row">
            <div>
              <div className=" flex justify-center items-center gap-4 text-white mb-6 ml-5">
                <a
                  href="https://x.com/"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
              </div>

              <p className=" text-white">
                Copyright 2024 HotDog All Rights Reserved.
              </p>
            </div>

      
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
