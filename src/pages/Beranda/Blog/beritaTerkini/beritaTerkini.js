// inisiasi library default
import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { baseUrl } from "../../../config";
// import { NavLink } from "react-router-dom";

import {
  // ThumbsUp,
  // MessageCircle,
  // Bookmark,
  // Image,
  // PlusCircle
} from "react-feather";
// import imageCard from '../../../assets/image-card.png';
// import data from "../../../../dummy/bloglist";

// import CardBg from "../../../assets/blog.png";
// import Card from "../../../components/fragment/Card";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import { Dragndrop } from "../../../../components/fragment/DragnDrop";
// import VideoPopup from "./VideoPopup";

import Card from "../../../../components/fragment/Card";


// import UserLogin from "../../../../assets/user-login.png";
// import bookmark from "../../../assets/bookmark.png";
// import calender from "../../../assets/calendar.png";
// import video from "../../../assets/icon-videoWhite.svg";
// import settings from "../../../assets/icon-settings.svg";
// import Search from "../../../assets/icon-search.svg";
// import AddButton from "../../../assets/icon-add.svg";
// const urls = [
//   "https://www.youtube.com/embed/30L-WoWIXO8",
//   "https://www.youtube.com/embed/J42SZXS-_Qo",
//   "https://www.youtube.com/embed/Zn_f6el0TKw",
//   "https://www.youtube.com/embed/GdvY4JX-WsI",
//   "https://www.youtube.com/embed/HIj8wU_rGIU",
//   "https://www.youtube.com/embed/7svK1dtQguA",
// ];

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      // token: "",
      // blogs: [],
      // description: "",
      // youtubeLink: "",
      // blogImage: {},
    };

    // if (localStorage.getItem("token")) {
    //   this.state.token = localStorage.getItem("token");
    // } else {
    //   window.location = "/login";
    // }
    // this.headerConfig.bind(this);

    this.state.showModal = false;
  }

  // headerConfig = () => {
  //   let header = {
  //     headers: { Authorization: `Bearer ${this.state.token}` },
  //   };
  //   return header;
  // };

  // getBlogs = () => {
  //   let url = baseUrl + "/blogs";
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       this.setState({ blogs: response.data.data });
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         if (error.response.status) {
  //           window.alert(error.response.data.message);
  //           // this.props.history.push("/dashboard")
  //         }
  //       } else {
  //         console.log(error);
  //       }
  //     });
  // };

  // componentDidMount() {
  //   this.getBlogs();
  // }

  // setImage = (param) => {
  //   this.state.blogImage = param;
  // };

  // saveBlogs = (event) => {
  //   event.preventDefault();
  //   let form = {
  //     description: this.state.description,
  //     youtubeLink: this.state.youtubeLink,
  //     blogImage: this.state.blogImage,
  //   };
  //   console.log(this.state.youtubeLink);
  //   console.log(form);
  //   let url = baseUrl + "/blogs";
  //   // console.log("ini msuk insert")
  //   axios
  //     .post(url, form)
  //     .then((response) => {
  //       window.alert(response.data.message);
  //       console.log(response);
  //       this.getBlogs();
  //       this.Modal();
  //     })
  //     .catch((error) => console.log(error));
  // };

  // // function untuk menampilkan modal tambah blog
  // Modal = () => {
  //   this.setState({
  //     showModal: !this.state.showModal,
  //   });
  // };

  render() {
    return (
      <>
        {" "}
        <LayoutSidebar>
          {" "}
          <div class="grid grid-rows-2 mt-8 ">
            <div class="ml-14 mt-3">
              <h1 className="text-2xl font-semibold mb-5">Postingan Terbaru</h1>
              <div className="mt-4 text-base font-normal text-gray-400">
                <a href="/blog" className="mr-5 ">
                  blog informasi
                </a>
                <a href="/beritaTerkini" className="mr-5 text-black">
                  berita terkini
                </a>
  
              </div>
              <div class="grid grid-cols-2 gap-4 mt-4">
                <Card />
                <Card />
                <Card />
                <Card />

              </div>
            </div>
           

          </div>
          {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <form 
                  // onSubmit={(ev) => this.saveBlogs(ev)}
                  >
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="relative px-6 pt-6 flex-auto">
                        {/*     <DragAndDropFile />kurang setState to image */}
                        <Dragndrop onChange={this.setImage} />
                        {/* <DragAndDropTest
                          onChange={(ev) => this.setState({ blogImage: ev.target.files[0] })}
                          // antara atas dan bawahnya
                          // onChange={(ev) => this.setState({ blogImage: ev.target.value })}
                        /> */}
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                          placeholder="Youtube Links"
                          onChange={(ev) => this.setState({ youtubeLink: ev.target.value })}
                        />
                        <textarea
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                          placeholder="Deskripsi Video"
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
