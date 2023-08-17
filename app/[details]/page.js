"use client";

import { DataContext } from "@/components/Provider";
import { useContext } from "react";

export default function Details({ params }) {
  const { details } = params;
  const data = useContext(DataContext);
  // console.log(data)
    const invoice = data.find((item) => item.id === details);
    console.log(invoice.clientAddress.street)
  return (
    <div className=" min-h-screen   flex items-start md:w-[60%] justify-center mx-auto ">
      <div className="md:mt-[3rem] gap-3 flex flex-col justify-center items-center w-full relative">
        <h2>Back</h2>
        <div className="w-full md:h-[4.5rem]  flex  justify-center items-center  bg-custom-base rounded-lg ">
          <div className="flex justify-between w-full items-center mx-4">
            <div className="flex  items-center gap-3">
              <h2>status</h2>
              <div className="flex items-center justify-end gap-3 bg-custom-paid_1 pl-5 pb-3 pt-3 pr-6 rounded-lg">
                <p
                  className={
                    invoice.status === "paid"
                      ? "h-[10px] w-[10px] bg-custom-paid_2 rounded-full"
                      : invoice.status === "pending"
                      ? "h-[10px] w-[10px] bg-custom-pending_2 rounded-full"
                      : "h-[10px] w-[10px] bg-custom-draft_2 rounded-full"
                  }
                ></p>
                <p
                  className={
                    invoice.status === "paid"
                      ? "text-custom-paid font-light text-sm"
                      : invoice.status === "pending"
                      ? "text-custom-pending font-light text-sm"
                      : "text-custom-draft font-light text-sm"
                  }
                >
                  {" "}
                  {invoice.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-500 bg-custom-nav px-3 py-1 rounded-full ">
                Edit
              </button>
              <button className="bg-red-500 px-3 py-1 rounded-full ">
                Delete
              </button>
              <button className="bg-purple-400 py-1 px-3 hidden md:block rounded-full ">
                Mark paid
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-8  flex  justify-center relative items-center mb-8  bg-custom-base rounded-lg ">
          <div className="flex w-full flex-col justify-end mx-4 pt-6 pb-7 ">
            {/* section one  */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start justify-start">
                <h2 className="font-bold">
                  {" "}
                  <span className="text-gray-400">#</span> {invoice.id}
                </h2>
                <p className="text-gray-400"> CLientName</p>
              </div>
              <div className="flex flex-col  text-gray-400 justify-end items-end">
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
            </div>
            {/* section two  */}
            <div className="grid grid-cols-4 md:grid-cols-6 w-full items-start justify-start mt-10">
              <div className="col-span-2 w-full grid grid-rows-5">
                <div className="text-gray-400 font-light ">invoice Date</div>
                <div className="font-bold text-2xl">{invoice.createdAt}</div>
                <div></div>
                <div className="text-gray-400 font-light ">payment Due</div>
                <div className="font-bold text-[1.2rem]">
                  {invoice.paymentDue}
                </div>
              </div>
              <div className="col-span-2 w-full grid grid-row-5">
                <div className="text-gray-400 font-light">Bill to</div>
                <div className=" text-[1.2rem]">{invoice.clientName}</div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.street}
                </div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.city}
                </div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.postCode}
                </div>
                <div className="text-gray-400 font-thin">
                  {invoice.clientAddress.country}
                </div>
              </div>
              <div className="col-span-2 w-full grid grid-row-5">
                <div className="text-gray-400 font-light"> Sent to</div>
                <div className="col-span-5">{invoice.clientEmail}</div>
              </div>
            </div>
            {/* section three  */}

            <div className="grid bg-custom-card  w-full items-center pt-6 rounded-t-lg rounded-b-lg mt-20 ">
              {invoice.items.map((item, index) => (
                <div key={index} className="grid grid-cols-4 md:grid-cols-8  bg-custom-card   mx-auto w-full pb-7">
                  <div className=" col-span-2 flex  flex-col items-center text-start w-full justify-start">
                    <h3 className="text-gray-400 text-start">Item name</h3>
                    <p className="text-center">{item.name}</p>
                  </div>
                  <div className=" hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                    <h3 className="text-gray-400">Qty</h3>
                    <p>{item.quantity}</p>
                  </div>
                  <div className=" hidden col-span-2 md:flex md:flex-col md:items-center md:justify-start">
                    <h3 className="text-gray-400">Item price</h3>
                    <p>{item.price}</p>
                  </div>
                  <div className="  flex  flex-col items-center justify-start">
                    <h3 className="text-gray-400">Total</h3>
                    <p>£{item.total}</p>
                  </div>
                </div>
              ))}
              <div className="bg-custom-total rounded-b-lg h-[6rem] w-full mt-8">
                <div className="flex justify-between items-start p-10 rounded-lg rounded-t-none ">
                  <h2 className="text-white font-semibold text-2xl">Amount</h2>
                  <h2 className="text-white font-semibold text-2xl">
                    {" "}
                    £{invoice.total}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
