// dashboard => utk dasar template biar tampilannya sama semua / layout aja di
// bagian page content

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


import { Home, BookOpen, ShoppingBag, FileText, Users, Clipboard } from 'react-feather';

import UserLog from '../../assets/user-login.png';
import Logo from '../../assets/logo.png';
import Bell from '../../assets/bell.svg';
import Power from '../../assets/power.svg';
import Search from '../../assets/icon-search.svg';
import './LayoutSidebar.css';

export default function LayoutSidebar({ children }) {
  // Dropdown
  const [showDropDown, setShowDropDown] = useState(false);

  const Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("data")
    window.location = "/login"
  }

  return (
    <div className="parent md:h-screen md:grid md:grid-cols-6 ">
      <section className="sidebar md:col-span-1 ">
        {/* LOGO DISINI */}
        <div className="box-icon border-white text-sm font-semibold justify-center items-center flex flex-col mt-4">
          <div className="mt" width="42">
            <img src={Logo} />
          </div>
          <h1 className="font-bold mt-2">PLATFORM SMK TKJ</h1>
        </div>
        <div>
          <ul>
            <li className="mt-1 ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
              <NavLink
                to="/beranda"
                activeClassName="active"
                className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700"
                aria-current="page"
              >
                <Home className="mr-3" />
                Dashboard
              </NavLink>
            </li>
            <li className="mt-1 ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
              <NavLink
                to="/blog"
                activeClassName="active"
                className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700"
                aria-current="page"
              >
                <BookOpen className="mr-3" /> Blog/Berita
              </NavLink>
            </li>
            <li className="mt-1 ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
              <NavLink
                to="/marketplace"
                activeClassName="active"
                className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700"
                aria-current="page"
              >
                <ShoppingBag className="mr-3" /> Marketplace
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setShowDropDown(true)}
                className="flex items-center mt-1 ml-3 pl-10 py-3.5 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <FileText />
                <span
                  className="flex ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Pengajuan
                </span>
                <svg
                  sidebar-toggle-item
                  className="w-6 h-6 ml-3 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* Show hide dropdown menu */}
              {showDropDown ? (
                <ul id="dropdown-example" className="ml-11 py-2 space-y-2">
                  <li>
                    <NavLink
                      to="/guruTamu"
                      activeClassName="dropdown"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-red-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                    >
                      Guru Tamu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/guruMagang"
                      activeClassName="dropdown"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-red-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                    >
                      Magang Guru
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/kunjungan"
                      activeClassName="dropdown"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-red-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                    >
                      Kunjungan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/sertifikasi"
                      activeClassName="dropdown"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-red-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                    >
                      Sertifikasi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bursaKerja"
                      activeClassName="dropdown"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-red-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                    >
                      Bursa Kerja
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="mt-1 ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
              <NavLink
                to="/forumdiskusi"
                activeClassName="active"
                className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700"
                aria-current="page"
              >
                <Users className="mr-3" /> Forum Diskusi
              </NavLink>
            </li>
            <li className="mt-1 ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
              <NavLink
                to="/lmsGuru"
                activeClassName="active"
                className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700"
                aria-current="page"
              >
                <Clipboard className="mr-3" /> LMS 
              </NavLink>
            </li>
            {/* <li className="mt-1 ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
              <NavLink
                to="/lmsSiswa"
                activeClassName="active"
                className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700"
                aria-current="page"
              >
                <Clipboard className="mr-3" /> LMS Siswa
              </NavLink>
            </li>
            <div className="static">
              <li className="absolute bottom-14 left-6 text-lg font-medium">
                <img src={UserLog} width="42" className="inline pr-2" />
                Jhon Doe
              </li>
            </div> */}
          </ul>
        </div>
      </section>
      <main class="main md:col-span-5 bg-gray-100">
        <div className="grid grid-cols-4 gap-4 pt-12 pb-12 border-b-2 shadow shadow-md ">
          <div class="col-span-3 relative ml-6">
            <input
              class="focus:ring-red-500 focus:border-red-500 rounded-full w-80 h-11 px-8 border-none"
              text-black="text-black"
              type="text"
              name="search"
              placeholder="Search"
            ></input>
            <button type="submit" class="absolute left-0 top-0 ml-64">
              <img src={Search} />
            </button>
          </div>
          <div className="mt-2">
            <Link to="/Akun" className="text-xl font-normal text-red-600 text-right pr-8">
              <span className="badge bg-red-300 rounded-full pl-2 pr-4 pt-2 pb-3 cursor-pointer">
                <img src={UserLog} className="inline w-8 mr-2"></img>
                <span className="text-sm font-medium text-red-500">John Doe</span>
              </span>
            </Link>
            <img
              src={Bell}
              className="inline w-8 ml-8 mr-8 cursor-pointer"
            ></img>
            <img src={Power} className="inline w-8 cursor-pointer" onClick={Logout}></img>
          </div>
        </div>
        {/* <!-- Page content--> */} <div className="">{children} </div>
      </main>
    </div>
  );
}
