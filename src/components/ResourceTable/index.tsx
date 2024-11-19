import React from "react";

export default function ResourceTable() {
  return (
    <div className="bg-white">
      <table className="table-auto w-full text-left border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200 border-b border-black">
            <th className="px-4 py-2 border border-black">Image</th>
            <th className="px-4 py-2 border border-black">Name</th>
            <th className="px-4 py-2 border border-black">Path</th>
            <th className="px-4 py-2 border border-black">Total Space (GiB)</th>
            <th className="px-4 py-2 border border-black">Used (GiB)</th>
            <th className="px-4 py-2 border border-black">Free (GiB)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-black">
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
          </tr>
          <tr className="bg-gray-100 border-b border-black">
            <td colSpan={6} className="px-4 py-2">
              <div className="relative h-4 bg-gray-100">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600"
                  style={{ width: "91%" }}
                ></div>
                <div
                  className="absolute top-0 left-[91%] h-full bg-teal-400"
                  style={{ width: "9%" }}
                ></div>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
            <td className="px-4 py-2 border border-black">Lorem Ipsum</td>
          </tr>
          <tr className="bg-gray-100 border-b border-black">
            <td colSpan={6} className="px-4 py-2">
              <div className="relative h-4 bg-gray-100">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600"
                  style={{ width: "56%" }}
                ></div>
                <div
                  className="absolute top-0 left-[56%] h-full bg-teal-400"
                  style={{ width: "44%" }}
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
