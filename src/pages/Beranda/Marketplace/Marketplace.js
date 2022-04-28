// inisiasi library default
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../config";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
import ItemCard from "../../../components/fragment/Marketplace/ItemCard";
import CardBeli from "../../../components/fragment/Marketplace/CardBeli";
import SummaryCard from "../../../components/fragment/Marketplace/SummaryCard";
// import DragAndDropFile from "./FilesDragAndDrop"
import { Dragndrop } from "../../../components/fragment/DragnDrop";
import Location from "../../../assets/map-pin.png";
import AddButton from "../../../assets/icon-add.svg";
import settings from "../../../assets/icon-settings.svg";
import search from "../../../assets/icon-search.svg";
import bag from "../../../assets/icon-bagWhite.svg";
import trolly from "../../../assets/icon-trolly.svg";
import tag from "../../../assets/icon-tag.svg";

export default class Marketplace extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      products: [],
      image: "",
      name: "",
      price: "",
      description: "",
      lokasi: "",
      status: "",
      stock: "",
      category: "",
    };

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    } else {
      window.location = "/login";
    }
    this.headerConfig.bind(this);
    // state show modal tambah barang
    this.state.showModal = false;
  }

  // function untuk menampilkan modal tambah barang
  Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  getProducts = () => {
    let url = baseUrl + "/products"
    axios.get(url, this.headerConfig())
        .then(response => {
            this.setState({ products: response.data.data })
            console.log(response.data.data)
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status) {
                    window.alert(error.response.data.message)
                    // this.props.history.push("/dashboard")
                }
            } else {
                console.log(error);
            }
        })
}

  componentDidMount() {
    this.getProducts();
  }

   saveProducts = event => {
    event.preventDefault()
    let form = new FormData()
    form.append("image", this.state.image)
    form.append("name", this.state.name)
    form.append("price", this.state.price)
    form.append("description", this.state.description)
    form.append("status", this.state.status)
    form.append("stock", this.state.stock)
    form.append("category", this.state.category)
  //   let form = {
  //     //variable masih belum sama dengan yang ada di be
  //     image: this.state.image,
  //     name: this.state.name,
  //     price: this.state.price,
  //     description: this.state.description,
  //     lokasi: this.state.lokasi,
  //     status: this.state.status,
  //     stock: this.state.stock,
  //     category: this.state.category
  // }
  console.log(form)
  let url = baseUrl + "/products"
  axios.post(url, form, this.headerConfig())
      .then(response => {
          window.alert(response.data.message)
          console.log(response)
          this.getProducts()
          this.Modal()
      })
      .catch(error => console.log(error))
}

  setImage = (param) => {
    this.state.image = param;
  };

  render() {
    return (
      <>
        {" "}
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 mt-12">
            <div class="col-span-2 ml-14">
              <div id="tabContent">
                {/* Tab Content 1 */}
                <div class="p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-3xl inline">Pilihan Hari Ini</h1>
                    <div className="flex justify-end">
                      <img src={Location} className="inline"></img>
                      <span className="text-right text-base font-normal ml-2">Jakarta</span>
                    </div>
                  </div>

                  {/* fitur tambah barang */}
                  <div className="mb-8 grid grid-cols-5 mt-5">
                    {/* <div className="col-span-2">
                                    <button
                                        className="bg-red-600 p-3 text-white rounded-2xl"
                                        data-modal-toggle="defaultModal">+ Tambah Barang</button>
                                </div> */}
                    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <form onSubmit={(ev) => this.saveProducts(ev)}>
                          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex justify-between items-start p-5 rounded-t">
                              <button
                                type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="defaultModal"
                              >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                            <div class="p-6 space-y-6">
                              <div className="grid ">
                                <input type="file" className="box mb-3 rounded-3xl border-slate-300  text-slate-300" placeholder="choose file" onChange={(ev) => this.setState({ image: ev.target.value })}></input>
                                <input type="text" className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Nama Barang" onChange={(ev) => this.setState({ name: ev.target.value })}></input>
                                <input type="text" className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Harga Barang" onChange={(ev) => this.setState({ price: ev.target.value })}></input>
                                <input type="text" className="mb-3 rounded-3xl border-slate-300 p-8 text-slate-300" placeholder="Deskripsi Barang" onChange={(ev) => this.setState({ description: ev.target.value })}></input>
                                <input type="text" className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Lokasi Penjualan" onChange={(ev) => this.setState({ lokasi: ev.target.value })}></input>
                              </div>
                            </div>

                            <div class="flex items-center p-6 space-x-2 rounded-b ">
                              <button
                                data-modal-toggle="defaultModal"
                                type="button"
                                class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                              >
                                Batal
                              </button>
                              <button
                                data-modal-toggle="defaultModal"
                                type="submit"
                                class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Tambah
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {this.state.products.map((item) => (
                      <ItemCard name={item.name} category={item.category} status={item.status} image={item.imageUrl} price={item.price} />
                    ))}
                 
                  </div>
                </div>
                {/* Tab Content 2 */}
                <div class="hidden p-4" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-xl inline">Pembelian Barang</h1>
                    <span className="col-span-1 text-right text-base font-normal text-red-600">Beli Barang</span>
                  </div>
                  <div className="grid cols-5 gap-4">
                    <CardBeli />
                    <CardBeli />
                    <CardBeli />
                  </div>
                </div>
                {/* Tab Content 3 */}
                <div class="hidden p-4" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-xl inline">Penjualan Barang</h1>
                    <span className="col-span-1 text-right text-base font-normal text-red-600">Jual Barang</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <SummaryCard />
                    <SummaryCard />
                    <SummaryCard />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pl-32 mt-10">
                <div className="flex flex-row">
                  <h4 className="text-lg font-semibold">Marketplace</h4>
                  <img src={settings} className="ml-24 cursor-pointer" />
                </div>
                <div class="col-span-3 relative">
                  <input class="focus:ring-red-500 focus:border-red-500 rounded-full w-64 h-11 mt-5 px-8 border-none" text-black="text-black" type="text" name="search" placeholder="Cari Barang"></input>
                  <button type="submit" class="absolute left-0 top-5 ml-48">
                    <img src={search} />
                  </button>
                </div>
                <div className="mt-8">
                  <Link to="/marketplace" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
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
                <div className="mt-6 ml-5">
                  <Link to="/riwayatpembelian">
                    <img src={tag} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Riwayat Pesanan</span>
                  </Link>
                </div>
                <div className="mt-8">
                  <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer">
                    <img src={AddButton} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Tambah Barang</span>
                  </span>
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
                    <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Component</span>
                    <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Aksesoris Komputer</span>
                    <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Komputer</span>
                    <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Komputer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.showModal ? (
            <>
              {/* UI beda dengan yang diperlukan izin untuk membetulkan */}
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <form onSubmit={(ev) => this.saveProducts(ev)}>
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" onSubmit={(ev) => this.saveProducts(ev)}>
                      <div className="relative px-6 pt-6 flex-auto">
                        <Dragndrop onChange={this.setImage} /> {/* kurang setState to image */}
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                          placeholder="Nama Barang"
                          onChange={(ev) => this.setState({ name: ev.target.value })}
                        />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                          placeholder="Harga Barang"
                          onChange={(ev) => this.setState({ price: ev.target.value })}
                        />
                        <select
                          value={this.state.status}
                          onChange={(ev) => this.setState({ status: ev.target.value })}
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 text-gray-500 rounded-xl px-6 py-4 mb-4"
                        >
                          <option value="" disabled selected>
                            Status
                          </option>
                          <option value="available">Available</option>
                          <option value="empty">Empty</option>
                          <option value="hide">Hide</option>
                        </select>
                        <select
                          value={this.state.category}
                          onChange={(ev) => this.setState({ category: ev.target.value })}
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 text-gray-500 rounded-xl px-6 py-4 mb-4"
                        >
                          <option value="" disabled selected>
                            Kategori Barang
                          </option>
                          <option value="book">Book</option>
                          <option value="it-services">IT Services</option>
                          <option value="electronic">Electronic</option>
                          <option value="misc">MISC</option>
                        </select>
                        <textarea
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                          placeholder="Deskripsi Barang"
                          onChange={(ev) => this.setState({ description: ev.target.value })}
                        />
                        <select
                          value={this.state.lokasi}
                          onChange={(ev) => this.setState({ lokasi: ev.target.value })}
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 text-gray-500 rounded-xl px-6 py-4 mt-4"
                        >
                          <option value="" disabled selected>
                            Lokasi Penjualan
                          </option>
                          <option value="1">Headmaster</option>
                          <option value="4">Vocation Net</option>
                          <option value="5">Telkom Group</option>
                          <option value="6">Ministry</option>
                        </select>
                        <input
                          type="text"
                          name="stock"
                          id="stock"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                          placeholder="Stock Barang"
                          onChange={(ev) => this.setState({ stock: ev.target.value })}
                        />
                      </div>
                      <div className="flex items-center justify-end p-6">
                        <button className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500" type="button" onClick={this.Modal}>
                          Batal
                        </button>
                        <button className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none" type="submit">
                          Tambah
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </LayoutSidebar>
      </>
    );
  }
}
