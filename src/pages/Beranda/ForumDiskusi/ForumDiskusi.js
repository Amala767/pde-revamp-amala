// inisiasi library default
import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../config";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  // PlusCircle
} from "react-feather";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
// import DragAndDropFile from "./FilesDragAndDrop";
import { Dragndrop } from "../../../components/fragment/DragnDrop";
import AddButton from "../../../assets/icon-add.svg";
import settings from "../../../assets/icon-settings.svg";
import berandaanda from "../../../assets/forumputih.png";
import temukan from "../../../assets/temukan.png";
import notifikasi from "../../../assets/bell.png";
import UserLogin from "../../../assets/user-login.png";

// import postingan from '../../../assets/postingan.png';

export default class Marketplace extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      forum: [],
      name: "",
      description: "",
      image: "",
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

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  // function untuk menampilkan modal tambah barang
  Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  Artikel = () => {
    this.setState({
      showArtikel: !this.state.showArtikel,
    });
  };

  getForum = () => {
    let url = baseUrl + "/chats/groups";
    axios
      .get(url,this.headerConfig())
      .then((response) => {
        this.setState({ forum: response.data.data });
        console.log(response.data.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message);
            // this.props.history.push("/dashboard")
          }
        } else {
          console.log(error);
        }
      });
  };

  componentDidMount() {
    this.getForum();
  }

  saveForum = (event) => {
    event.preventDefault();
    let form = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
    };
    console.log(form);
    let url = baseUrl + "/chats/groups";
    // console.log("ini msuk insert")
    axios
      .post(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getForum();
        this.Modal();
      })
      .catch((error) => console.log(error));
  };

  SplitDate = (date) => {
    return date.split("T")[0];
  };

  setImage = (param) => {
    this.state.image = param;
  };

  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 mt-12">
            <div class="col-span-2 ml-14">
              <div>
                <h1 className="text-3xl font-semibold">Aktivitas Terbaru ini halaman temukan</h1>
                {this.state.forum.map(() => (
                  <div className="card rounded-lg bg-white p-8 my-8 ">
                    <div className="max-w-full bg-white justify-center flex flex-col rounded-2xl">
                      <div className="flex flex-row">
                        <div className="flex items-center">
                          <img src="https://www.dicoding.com/blog/wp-content/uploads/2019/08/internal-css.png" className="rounded-full w-10 h-10 self-center mr-4"></img>
                          <span>dari <b>Forum Programmer Indonesia</b></span>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="flex flex-row">
                        <div className="flex items-center">
                          <img src={UserLogin} className="rounded-full w-15 h-15 self-center mr-4"></img>
                          <div>
                            <h1
                              style={{
                                fontWeight: "600",
                                fontSize: "20px",
                              }}
                            >
                              Pr
                            </h1>
                            <span className="text-slate-500">Yesterday, at 12.04</span>
                          </div>
                        </div>
                        <button className="inline">
                          <MoreHorizontal color="#EF4444"/>
                        </button>
                      </div>
                      <NavLink to="/templateBlog" className="flex flex-col">
                        <p
                          style={{
                            marginBottom: "15px",
                            marginTop: "15px",
                            fontWeight: "400",
                            fontSize: "15px",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur corrupti quos odit enim nisi sed asperiores dignissimos, harum, ullam earum eius rem molestiae quod non necessitatibus unde amet. Illum vero delectus dignissimos quisquam voluptates ab sit. Natus autem consequuntur, minima dicta reiciendis nemo a molestiae mollitia vitae pariatur! Voluptas.
                        </p>
                        <img src="https://redaksi.pens.ac.id/wp-content/uploads/2018/12/photo-1529101091764-c3526daf38fe.jpg" className="object-cover" />
                      </NavLink>
                      <div class=" bottom-0 left-0 grid grid-cols-3 w-4/5" style={{ margin: "0 auto", marginTop: "1.5rem" }}>
                        <button className="inline">
                          <ThumbsUp className="inline" />
                        </button>
                        <button className="inline">
                          <MessageCircle className="inline" />
                        </button>
                        <button className="inline">
                          <Share2 className="inline" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*batas kanan */}

            <div>
              <div className="pl-32 mt-10">
                <div className="flex flex-row">
                  <h4 className="text-lg font-semibold">Sharing Informasi</h4>
                  <img src={settings} className="ml-24 cursor-pointer" />
                </div>

                <div className="mt-8">
                  <Link to="/forumdiskusi" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
                    <img src={berandaanda} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Beranda Anda</span>
                  </Link>
                </div>
                <div className="mt-6 ml-5">
                  <Link to="/Temukan">
                    <img src={temukan} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Temukan</span>
                  </Link>
                </div>
                <div className="mt-6 ml-5 mb-8">
                  <Link to="/Notifikasi">
                    <img src={notifikasi} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Notifikasi</span>
                  </Link>
                </div>
                <div className="mt-12">
                  <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer">
                    <img src={AddButton} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Tambah Forum</span>
                  </span>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold">Grup yang Anda Tergabung didalamnya</h4>
                  <div className="mt-6 grid grid-cols-6">
                    <img src={UserLogin} className="inline w-10 mr-4"></img>
                    <div className="col-span-5">
                      <span className="text-base font-normal">Programmer Club</span>
                      <br />
                      <span className="text-sm font-normal text-slate-400">Terakhir aktif 1 hari yang lalu</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-6">
                    <img src={UserLogin} className="inline w-10 mr-4"></img>
                    <div className="col-span-5">
                      <span className="text-base font-normal">Programmer Club</span>
                      <br />
                      <span className="text-sm font-normal text-slate-400">Terakhir aktif 1 hari yang lalu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.showArtikel ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col bg-white outline-none focus:outline-none" onSubmit={(ev) => this.saveBlogs(ev)}>
                    <div className="relative px-8 pt-6 flex-auto">
                      <Dragndrop onChange={this.setImage} /> {/* kurang setState to image */}
                      <input
                        type="text"
                        name="forum"
                        id="forum"
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4 mt-8"
                        placeholder="Forum Name"
                        onChange={(ev) => this.setState({ name: ev.target.value })}
                      />
                      <textarea
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                        placeholder="Deskripsi Forum"
                        onChange={(ev) => this.setState({ description: ev.target.value })}
                      />
                    </div>
                    <div className="flex items-center justify-end p-6">
                      <button className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500" type="button" onClick={this.Artikel}>
                        Batal
                      </button>
                      <button className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none" type="submit" onClick={this.Artikel}>
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" onSubmit={(ev) => this.saveBlogs(ev)}>
                    <div className="relative px-6 pt-6 flex-auto">
                      <Dragndrop onChange={this.setImage} /> {/* kurang setState to image */}
                      <input
                        type="text"
                        name="forum"
                        id="forum"
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4 mt-8"
                        placeholder="Forum Name"
                        onChange={(ev) => this.setState({ name: ev.target.value })}
                      />
                      <textarea
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                        placeholder="Deskripsi Forum"
                        onChange={(ev) => this.setState({ description: ev.target.value })}
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
