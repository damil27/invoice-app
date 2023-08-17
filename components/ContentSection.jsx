"use client";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Provider";
import AddNewInvoice from "./addNewInvoice";
import Link from "next/link";

export const ContentSection = () => {
  const data = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);
  const [myData, setMyData] = useState([]);
  const [GlobalData, setGlobalData] = useState(data);
  const handleOnSubmit = async (newData, e) => {
    e.preventDefault();
    try {
      setGlobalData((prev) => [newData, ...prev]);
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      {/* header here  */}
      <div className="flex justify-end my-[3rem] items-center h-[65px] w-full mb-[2rem] p-[1rem] md:p-4 ">
        <div className=" left-3 absolute">
          <h2 className="text-4xl font-bold">Invoice</h2>
          <p className="text-gray-500 hidden md:block ">
            There are 7 total invoice
          </p>
          <p className="text-gray-500 md:hidden"> 7invoice</p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-4 items-center justify-center">
            <p className="hidden md:block">Filter by status </p>
            <p className="md:hidden">Filter </p>
            <img src="/icon-arrow-down.svg" alt="dropdown-icon" />
          </div>
          <div
            onClick={() => setOpenModal(true)}
            className=" bg-custom-btn w-[5rem] h-[2rem] md:w-[10rem] md:h-[3rem] rounded-full flex items-center justify-evenly"
          >
            <div className="bg-white w-[20px] h-[20px] md:h-[40px] md:w-[40px] rounded-full  flex items-center justify-center">
              <img src="./icon-plus.svg" alt="" className="" />
            </div>
            New <span className="hidden md:block">invoice</span>
          </div>
        </div>
      </div>
      GlobalData
      {GlobalData.map((val, index) => {
        const { id } = val;
        return (
          <Link className="w-full " key={index} href={`/${id}`}>
            <div className="w-full md:h-[4.5rem]  flex  justify-center items-center  bg-custom-base rounded-lg hover:cursor-pointer hover:border-2 hover:border-purple-600 mb-6">
              {/* desktop view  */}
              <div className="hidden md:block w-full bg-custom-card rounded-lg ">
                <div className="  flex    items-center justify-between p-3 w-full  ">
                  <div className="flex  flex-col gap-2 md:flex-row items-center justify-start md:gap-6">
                    <p className="font-bold">
                      <span className="text-custom-access1">#</span>
                      {val.id}
                    </p>
                    <p className=" text-sm font-thin text-custom-access1 ">
                      Due {val.paymentDue}
                    </p>
                    <p className="text-sm font-thin">{val.clientName}</p>
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <p className="font-bold text-2xl">${val.total}</p>
                    <div className="flex items-center justify-end gap-3 bg-custom-paid_1 pl-5 pb-3 pt-3 pr-6 rounded-lg">
                      <p
                        className={
                          val.status === "paid"
                            ? "h-[10px] w-[10px] bg-custom-paid_2 rounded-full"
                            : val.status === "pending"
                            ? "h-[10px] w-[10px] bg-custom-pending_2 rounded-full"
                            : "h-[10px] w-[10px] bg-custom-draft_2 rounded-full"
                        }
                      ></p>
                      <p
                        className={
                          val.status === "paid"
                            ? "text-custom-paid font-light text-sm"
                            : val.status === "pending"
                            ? "text-custom-pending font-light text-sm"
                            : "text-custom-draft font-light text-sm"
                        }
                      >
                        {" "}
                        {val.status}
                      </p>
                    </div>
                    <p>
                      <img src="./icon-arrow-right.svg" alt="" />
                    </p>
                  </div>
                </div>
              </div>
              {/* mobile view  */}
              <div className="flex md:hidden   items-center justify-between p-5 w-full ">
                <div className="flex  flex-col gap-2 md:flex-row items-start justify-start md:gap-6">
                  <p className="font-bold">{val.id}</p>
                  <p className="text-sm font-thin text-custom-access1">
                    Due {val.paymentDue}
                  </p>
                  <p className="text-sm font-bold">${val.total}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                  <p className="text-sm font-thin">{val.clientName}</p>

                  <div className="flex items-center justify-end gap-3 bg-custom-paid_1 pl-5 pb-3 pt-3 pr-6 rounded-lg">
                    <p
                      className={
                        val.status === "paid"
                          ? "h-[10px] w-[10px] bg-custom-paid_2 rounded-full"
                          : val.status === "pending"
                          ? "h-[10px] w-[10px] bg-custom-pending_2 rounded-full"
                          : "h-[10px] w-[10px] bg-custom-draft_2 rounded-full"
                      }
                    ></p>
                    <p
                      className={
                        val.status === "paid"
                          ? "text-custom-paid font-light text-sm"
                          : val.status === "pending"
                          ? "text-custom-pending font-light text-sm"
                          : "text-custom-draft font-light text-sm"
                      }
                    >
                      {" "}
                      {val.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      {openModal && (
        <AddNewInvoice
          handleOnSubmit={handleOnSubmit}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
