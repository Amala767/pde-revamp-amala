// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";

export default class BursaKerja extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <LayoutSidebar>
          <div className="pl-12 grid grid-flow-row-dense grid-cols-3 mt-10">
            <div className="col-span-2" >
              <h1 className="text-xl font-semibold">Pengajuan Bursa Kerja</h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button className="bg-red-600 p-3 text-white rounded-2xl">+ Tambah Lowongan</button>
                </div>
                <div className="col-span-3 flex justify-end">
                  <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-dark border-red-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">3<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                      </ul>
                  </div>
                  <input type="text" className="rounded-full w-64 h-11 px-8 border-red-400" placeholder="Search" style={{border: `1px solid #E70000`}}></input>              
                </div>
              </div>       
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Nama Jabatan Kerja
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Deskripsi
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Persyaratan
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Tanggal Due Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="w-4 p-4">
                            <h6 className="text-black font-semibold text-sm">Web Developer</h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-semibold text-sm">Bertanggung jawab mengelola website</h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-semibold text-sm">1. Menguasai 3 bahasa porgram</h6>
                          <h6 className="text-black font-semibold text-sm">2. Mampu bekerjasama</h6>
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                            15 Januari 2022
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}
