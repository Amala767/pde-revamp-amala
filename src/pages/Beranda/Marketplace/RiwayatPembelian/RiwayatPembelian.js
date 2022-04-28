// inisiasi library default
import React from "react";
import {Link} from "react-router-dom";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import ItemCard from "../../../../components/fragment/Marketplace/ItemCard";
import CardBeli from "../../../../components/fragment/Marketplace/CardBeli";
import SummaryCard from "../../../../components/fragment/Marketplace/SummaryCard";
import Location from "../../../../assets/map-pin.png";
import settings from "../../../../assets/icon-settings.svg"
import search from "../../../../assets/icon-search.svg"
import bag from "../../../../assets/icon-bag.svg"
import trolly from "../../../../assets/icon-trolly.svg"
import tag from "../../../../assets/icon-tagWhite.svg"

export default class RiwayatPembelian extends React.Component {
    constructor() {
        super();
        this.state = {
            // call variable
        };
    }
    render() {
        return (
            <> < LayoutSidebar > <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-10">
                <div class="col-span-2 ml-14">
                    <div id="tabContent">
                        {/* Tab Content 1 */}
                        <div
                            class="hidden p-4"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab">
                            <div className="mb-8 grid grid-cols-4">
                                <h1 className="col-span-3 font-semibold text-xl inline">Pilihan Hari Ini</h1>
                                <div className="flex justify-end">
                                    <img src={Location} className="inline"></img>
                                    <span className="text-right text-base font-normal ml-2">
                                        Jakarta</span>
                                </div>
                            </div>

                            {/* fitur tambah barang */}
                            <div className="mb-8 grid grid-cols-5 mt-5">
                                <div className="col-span-2">
                                    <button
                                        className="bg-red-600 p-3 text-white rounded-2xl"
                                        data-modal-toggle="defaultModal">+ Tambah Barang</button>
                                </div>
                                <div
                                    id="defaultModal"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div class="flex justify-between items-start p-5 rounded-t">
                                                <button
                                                    type="button"
                                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-toggle="defaultModal">
                                                    <svg
                                                        class="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="p-6 space-y-6">
                                                <div className="grid ">
                                                    <input
                                                        type="file"
                                                        className="box mb-3 rounded-3xl border-slate-300  text-slate-300"
                                                        placeholder="choose file"></input>
                                                    <input
                                                        type="text"
                                                        className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300"
                                                        placeholder="Nama Barang"></input>
                                                    <input
                                                        type="text"
                                                        className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300"
                                                        placeholder="Harga Barang"></input>
                                                    <input
                                                        type="text"
                                                        className="mb-3 rounded-3xl border-slate-300 p-8 text-slate-300"
                                                        placeholder="Deskripsi Barang"></input>
                                                    <input
                                                        type="text"
                                                        className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300"
                                                        placeholder="Lokasi Penjualan"></input>
                                                </div>
                                            </div>

                                            <div class="flex items-center p-6 space-x-2 rounded-b ">
                                                <button
                                                    data-modal-toggle="defaultModal"
                                                    type="button"
                                                    class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                                <button
                                                    data-modal-toggle="defaultModal"
                                                    type="button"
                                                    class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <ItemCard/>
                                <ItemCard/>
                                <ItemCard/>
                            </div>
                        </div>
                        {/* Tab Content 2 */}
                        <div
                            class="hidden p-4"
                            id="dashboard"
                            role="tabpanel"
                            aria-labelledby="dashboard-tab">
                            <div className="mb-8 grid grid-cols-4">
                                <h1 className="col-span-3 font-semibold text-xl inline">Pembelian Barang</h1>
                                <span className="col-span-1 text-right text-base font-normal text-red-600">
                                    Beli Barang</span>
                            </div>
                            <div className="grid cols-5 gap-4">
                                <CardBeli/>
                                <CardBeli/>
                                <CardBeli/>
                            </div>
                        </div>
                        {/* Tab Content 3 */}
                        <div
                            class="p-4"
                            id="settings"
                            role="tabpanel"
                            aria-labelledby="settings-tab">
                            <div className="mb-8 grid grid-cols-4">
                                <h1 className="col-span-3 font-semibold text-xl inline">Penjualan Barang</h1>
                                <span className="col-span-1 text-right text-base font-normal text-red-600">
                                    Jual Barang</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <SummaryCard/>
                                <SummaryCard/>
                                <SummaryCard/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                  <div className="pl-32 mt-10">
                      <div className="flex flex-row">
                          <h4 className="text-lg font-semibold">Marketplace</h4>
                          <img src={settings} className="ml-24 cursor-pointer"/>
                      </div>
                      <div class="col-span-3 relative">
                          <input
                              class="focus:ring-red-500 focus:border-red-500 rounded-full w-64 h-11 mt-5 px-8 border-none"
                              text-black="text-black"
                              type="text"
                              name="search"
                              placeholder="Cari Barang"></input>
                          <button type="submit" class="absolute left-0 top-5 ml-48">
                              <img src={search}/>
                          </button>
                      </div>
                      <div className="mt-8 ml-5">
                          <Link to="/marketplace">
                              <img src={bag} className="inline mr-4"></img>
                              <span className="font-normal text-base ">Telusuri Semua</span>
                          </Link>
                      </div>
                      <div className="mt-6 ml-5">
                          <Link to="/keranjang">
                              <img src={trolly} className="inline mr-4"></img>
                              <span className="font-normal text-base ">List Pembelian</span>
                          </Link>
                      </div>
                      <div className="mt-6">
                          <Link to="/riwayatpembelian" className="py-3 pl-5 pr-12 text-white bg-red-500 rounded-2xl">
                              <img src={tag} className="inline mr-4"></img>
                              <span className="font-normal text-base ">Riwayat Pesanan</span>
                          </Link>
                      </div>
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold">Filter</h4>
                        <div className="mt-4">
                            <img src={Location} className="inline mr-2"></img>
                            <span className="">Jakarta, Indonesia</span>
                        </div>
                      </div>
                      <div className="mt-8">
                          <h4 className="text-lg font-semibold">Kategori</h4>
                          <div className="flex flex-wrap gap-2 mt-4">
                              <span
                                  className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Component</span>
                              <span
                                  className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Aksesoris Komputer</span>
                              <span
                                  className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Komputer</span>
                              <span
                                  className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Komputer</span>
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
