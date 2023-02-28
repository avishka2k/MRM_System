import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function InventoryContent() {
  return (
    <div className="w-full h-screen bg-slate-100  text-black">
      <div className="mx-20">
        <div className="flex justify-between mb-10">
          <p className="font-bold text-2xl">Inventory</p>
          <div className="border border-black bg-gray-300 py-4 px-8">
            Add New drug
          </div>
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs h-16 uppercase bg-gray-300  text-black">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Drug name
                </th>
                <th scope="col" class="px-6 py-3">
                  Manufacturer
                </th>
                <th scope="col" class="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" class="px-6 py-3">
                  NDC
                </th>
                <th scope="col" class="px-6 py-3">
                  Expiration date
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Unit price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white text-black border-b">
                <td class="px-6 py-4">1</td>
                <td class="px-6 py-4">name1</td>
                <td class="px-6 py-4">lava</td>
                <td class="px-6 py-4">saf</td>
                <td class="px-6 py-4">3244</td>
                <td class="px-6 py-4">2/2023</td>
                <td class="px-6 py-4">34</td>
                <td class="px-6 py-4">
                  <span>$</span>56
                </td>
                <td class="px-6 py-4  flex gap-10 items-center">
                  <FiEdit className="text-blue-600 text-xl" />
                  <MdDeleteForever className="text-red-600 text-2xl" />
                </td>
              </tr>
              <tr class="bg-white text-black border-b">
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4">name2</td>
                <td class="px-6 py-4">lava</td>
                <td class="px-6 py-4">saf</td>
                <td class="px-6 py-4">3244</td>
                <td class="px-6 py-4">2/2023</td>
                <td class="px-6 py-4">34</td>
                <td class="px-6 py-4">
                  <span>$</span>56
                </td>
                <td class="px-6 py-4  flex gap-10 items-center">
                  <FiEdit className="text-blue-600 text-xl" />
                  <MdDeleteForever className="text-red-600 text-2xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InventoryContent;
