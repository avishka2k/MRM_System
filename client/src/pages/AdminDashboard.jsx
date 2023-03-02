import React from "react";
import { MdClose, MdDone } from "react-icons/md";

function AdminDashboard() {
  return (
    <div className="">
      <div className="z-[1000] bg-white fixed w-full h-20 flex">
        <div className="container m-auto justify-between flex">
          <div className="font-bold text-xl">LOGO</div>
          <div className="">Logout</div>
        </div>
      </div>
      <div className="w-full h-screen pt-[10rem] bg-slate-100  text-black">
        <div className="container m-auto">
          <div className="flex justify-between mb-10">
            <p className="font-bold text-2xl">Inventory</p>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs h-16 uppercase bg-gray-300  text-black">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pharmacy name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pharmacy email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Owner name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Verification Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">name1</td>
                  <td className="px-6 py-4">lava</td>
                  <td className="px-6 py-4">saf</td>
                  <td className="px-6 py-4 ">
                    <span className="bg-yellow-100  ml-8 text-yellow-800 text-sm font-medium px-[11px] py-0.5 rounded">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4  flex gap-10 items-center">
                    <MdDone className="text-green-800 cursor-pointer text-2xl" />
                    <MdClose className="text-red-600 cursor-pointer text-2xl" />
                  </td>
                </tr>
                <tr className="bg-white text-black border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">name1</td>
                  <td className="px-6 py-4">lava</td>
                  <td className="px-6 py-4">saf</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 ml-8 text-red-800 text-sm font-medium px-4 py-0.5 rounded ">
                      Ignore
                    </span>
                  </td>
                  <td className="px-6 py-4  flex gap-10 items-center">
                    <MdDone className="text-green-800 cursor-pointer text-2xl" />
                    <MdClose className="text-red-600 cursor-pointer text-2xl" />
                  </td>
                </tr>
                <tr className="bg-white text-black border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">name1</td>
                  <td className="px-6 py-4">lava</td>
                  <td className="px-6 py-4">saf</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 ml-8 text-green-800 text-xs font-medium px-5 py-0.5 rounded">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4  flex gap-10 items-center">
                    <MdDone className=" text-2xl text-green-800 cursor-pointer" />
                    <MdClose className="text-red-600 text-2xl cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
