import React from "react";

function Taxs() {
  return (
    <section className=" pt-[2%] pb-[8%]  relative ">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className=" container-wrapper  border-4  border-[#793220] rounded-3xl box-s2 py-4 px-4 relative z-20 flex flex-col sm:flex-row justify-between gap-4"
      >
        <a
          href="#"
          className="block max-w-sm p-6 bg-[#793220] border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
        >
          <img src="/images/burn.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center font-dream ">
            LP Burning
          </h5>
          <p className="font-normal text-purple-300  text-center">LP LOCKED</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#793220] dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
        >
          <img src="/images/g3.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#793220] dark:text-white text-center font-dream ">
            No Taxes
          </h5>
          <p className="font-normal text-purple-300 text-center">
            0% BUY / 0% SELL
          </p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#793220] dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
        >
          <img src="/images/g2.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#793220] dark:text-white text-center font-dream ">
            Contract
          </h5>
          <p className="font-normal text-purple-300 text-center">
            Mint REVOKED
          </p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-[#793220] border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
        >
          <img src="/images/mon.png" alt="" className=" mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center font-dream ">
            Fair Launch
          </h5>
          <p className="font-normal text-purple-300 text-center">
            NO PRE-SALES
          </p>
        </a>
      </div>

      <div className=" flex justify-center flex-col items-center">
        <div>
          <p className=" text-center text-white mt-4">
            $PUPE UTILITY TOKEN - SOLANA CHAIN{" "}
          </p>

          <h1 className=" text-xl sm:text-5xl font-bold font-dream text-center text-white  bg-[#793220] rounded-xl px-2 py-4">
            Total Supply 1.000.000.000
          </h1>
          <div className=" flex justify-center gap-6 items-center mt-4">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#793220] dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
                Token Name
              </h5>
              <p className="font-normal text-purple-300 text-center">HOTDOG</p>
            </a>

            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#793220] dark:border-gray-700 dark:hover:bg-gray-700 w-full sm:w-[250px]"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center font-dream ">
                SYMBOL
              </h5>
              <p className="font-normal text-purple-300 text-center">$HDOG</p>
            </a>
          </div>
          <p className="text-center text-white mt-4">
            Contract Adress: 22gDriYX9SQASrV5PX4nAu5obefQhTyd8bZT4M9K1Mv3
          </p>
        </div>
      </div>
    </section>
  );
}

export default Taxs;
