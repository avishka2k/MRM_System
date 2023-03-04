import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdClose, MdDone } from "react-icons/md";
import UserVerification from "./Verification";

function AdminDashboard() {
  const [userlist, setUserlist] = useState([]);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/getuser`)
      .then((res) => {
        setUserlist(res.data);
      });
  });

  const handleVerification = (userId) => {
    axios
      .put(
        `http://localhost:${process.env.REACT_APP_PORT}/users/${userId}/verification`,
        {
          verification: true,
        }
      )
      .then((res) => {
        setUpdatedUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:${process.env.REACT_APP_PORT}/deleteuser/${id}`)
      .then((res) => {
        // Update the list of user after successful deletion
        setListOfUser(listOfUser.filter((user) => user.id !== id));
      });
  };

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
            <p className="font-bold text-2xl">Pharmacies</p>
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
                {userlist.length !== 0 ? (
                  userlist &&
                  userlist.length > 0 &&
                  userlist.map((user, index) => (
                    <tr key={index} className="bg-white text-black border-b">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{user.pname}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.license}</td>
                      <td className="px-6 py-4 ">
                        {user.verification ? (
                          <span className="bg-green-100 ml-8 text-green-800 font-medium px-5 py-0.5 rounded">
                            Verified
                          </span>
                        ) : (
                          <span className="bg-yellow-100  ml-8 text-yellow-800 font-medium px-[18px] py-0.5 rounded">
                            Pending
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4  flex gap-10 items-center">
                        {user.verification ? (
                          <div className="pl-6"></div>
                        ) : (
                          <MdDone
                            onClick={() => handleVerification(user._id)}
                            className="text-green-800 cursor-pointer text-2xl"
                          />
                        )}
                        <MdClose
                          onClick={() => handleDeleteUser(user._id)}
                          className="text-red-600 cursor-pointer text-2xl"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className=" text-gray-600">
                    <td className="pl-5 py-5">No User inserted</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
