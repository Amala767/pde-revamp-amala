// dashboard => utk dasar template biar tampilannya sama semua / layout aja di bagian page content

import React from "react";
import { Link } from "react-router-dom";
import UserLog from '../../assets/user-login.png'
import Logo from '../../assets/logo.png'

export default function LayoutSidebar({ children }) {
  const sidebarContent = [
    {
      label: "Dashboard",
      target: "/beranda",
      // icon: "icon/estate.svg",
    },

    {
      label: "Blog/Berita",
      target: "/blog",
    },
    {
      label: "Markerplace",
      target: "/marketplace",
    },
    {
      label: "Pengajuan",
      target: "/pengajuan",
    },
    {
      label: "Forum Diskusi",
      target: "/forumDiskusi",
    },
  ];

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
            {/* NAV-LINK */}
            {sidebarContent.map(({ target, label }, i) => (
              <li className="pl-6">
                <Link to={target} className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700" aria-current="page">
                  
                  {label}
                </Link>
              </li>
            ))}
          <div className="static">
            <li className="absolute bottom-14 left-6 text-lg font-medium"><img src={UserLog} width="42" className="inline pr-2"/>Jhon Doe</li>
          </div>
          </ul>
        </div>
      </section>
      <main class="main md:col-span-5 bg-gray-100">
        <div className="grid grid-cols-4 gap-4 pt-12 ml-14">
          <div className="col-span-3">
            <input type="text" className="rounded-full w-80 h-11 px-8 border-red-400" placeholder="Search" style={{border: `1px solid #E70000`}}></input>
          </div>
          <div className="mt-2">
            <span className="badge bg-red-300 rounded-full pl-2 pr-4 pt-2 pb-3">
              <img src={UserLog} className="inline w-8 mr-2"></img>
              <span className="text-sm font-medium text-red-500">John Doe</span>
            </span>
          </div>
        </div>
        {/* <!-- Page content--> */}{" "}
        <div className="">
          {children}{" "}
        </div>
      </main>
    </div>
  );
}
