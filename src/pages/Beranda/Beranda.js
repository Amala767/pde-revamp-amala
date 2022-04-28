// inisiasi library default
import React from "react";
import { Users } from "react-feather";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Beranda.css";

// inisiasi component
import LayoutSidebar from "../../components/Layout/LayoutSidebar";
// import CardBox from "../../components/fragment/Beranda/CardBox";
import UserLogin from "../../assets/user-login.png";
// import siaran from "../../assets/youtube.svg"
// import foto from "../../assets/icon-foto.svg"
// import forum from "../../assets/icon-forum.svg"
// import postingan from "../../assets/postingan.png"
// import newGroup from "../../assets/newGroup.png"
// import Horizontal from "../../assets/icon-horizontal.svg"
import Class from "../../assets/class.svg";

export default class Beranda extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: ""
    };
    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token")
  } else {
      window.location = "/login"
  }
  this.headerConfig.bind(this)
  }
  headerConfig = () => {
    let header = {
        headers: { Authorization: `Bearer ${this.state.token}` }
    }
    return header
}
  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-8 pb-8">
            <div class="col-span-2 ml-14">
              <h1 className="text-2xl font-semibold">Daftar Kelas</h1>
              <div className="mt-4 text-base font-normal text-gray-400">
                <a href="/beranda" className="mr-5 text-black">
                  Semua
                </a>
                <a href="/newclass" className="mr-5">
                  Terbaru
                </a>
                <a href="/endclass" className="mr-5">
                  Selesai
                </a>
                <a href="/activeclass" className="mr-5">
                  Aktif
                </a>
              </div>
              <div className="mt-5">
                <div className="bg-white p-4 rounded-3xl grid grid-cols-4">
                  <div className="">
                    <img src={Class}></img>
                  </div>
                  <div className="col-span-3 py-2 px-8">
                    <div className="grid grid-cols-4">
                      <h4 className="col-span-3 text-base font-normal text-gray-300">Andre Kurniawan S.Pd</h4>
                      <span className="text-right">
                        <Users className="inline mr-2" /> 39 Orang
                      </span>
                    </div>
                    <h2 className="mb-6 text-lg font-medium">Bahasa Inggris</h2>
                    <span className="p-2 rounded-lg bg-amber-100 text-amber-500 text-sm font-medium">Wawasan Umum</span>
                    <div className="grid grid-cols-4 mt-6">
                      <div className="col-span-2">
                        <h6 className="text-sm font-medium">39% Compolete</h6>
                        <div class="w-full bg-amber-100 rounded-full h-2.5 dark:bg-gray-700 mr-4 mt-1">
                          <div class="bg-amber-400 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div></div>
                      <button className="p-2 bg-red-600 rounded-full text-white">Detail Kelas</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="pl-16 pr-8">
                <h4 className="text-lg mb-4 font-semibold">Calendar</h4>
                <div className="bg-white p-4 rounded-3xl ">
                  <Calendar />
                </div>
              </div>
              <div className="pl-16 mt-12">
                <h4 className="text-lg font-semibold">Aktivitas Terbaru</h4>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Listening Session Talk</h5>
                      <span className="font-normal text-sm text-gray-500">Bahasa Inggris - 2 jam </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Modul 3 Basic Android</h5>
                      <span className="font-normal text-sm text-gray-500">Pemrograman Android - 8 jam </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Reading Session Talk</h5>
                      <span className="font-normal text-sm text-gray-500">Bahasa Inggris - Kemarin </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Ulangan Harian 3 Matematika</h5>
                      <span className="font-normal text-sm text-gray-500">Matematika - Kemarin </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-16 mt-12">
                <h4 className="text-lg font-semibold">Pengguna Online</h4>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={UserLogin} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Kedar Anugerah Nacha Putra</h5>
                      <span className="font-normal text-sm text-gray-500">Siswa </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={UserLogin} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Nanda Hafiza Yusron</h5>
                      <span className="font-normal text-sm text-gray-500">Siswa </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={UserLogin} className="" />
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Hafiz Rizky Nurwachid</h5>
                      <span className="font-normal text-sm text-gray-500">Siswa </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}
