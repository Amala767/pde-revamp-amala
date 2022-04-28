import React from 'react'
import { Youtube, Instagram, Twitter, Facebook, Video } from 'react-feather'
import { Link } from 'react-router-dom'

import LayoutSidebar from '../../../components/Layout/LayoutSidebar'
import AddButton from "../../../assets/icon-add.svg"
// import DragAndDropFile from "../../FilesDragAndDrop"



export default class Akun extends React.Component{
    constructor(){
        super()
        this.state = {
            // var
        }
        this.state.showModal = false;
    }
    Modal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render(){
        return(
            <div>
                <LayoutSidebar>
                <div class="grid grid-flow-row-dense grid-cols-3 mt-12">
                <div class="col-span-2 ml-14">

                    <div id="tabContent">
                        {/* Tab Content 1 */}
                        <div
                            class="p-4"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab">
                            <div className="">
                                <div className="card  rounded-3xl bg-white">
                                    <div className="card-header bg-green-400 rounded-t-3xl p-4 pt-14 text-right-16 text-white w-400">
                                            <img src="ima{ehttps://asset.kompas.com/crops/txm2BJEzEyoM74OgADVQB7JEv_w=/9x0:1061x526/750x500/data/photo/2020/09/25/5f6d6569006ee.jpe}assName="w-screen />

                                            {/* <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-600 rounded-2xl cursor-pointer">
                                                <img src={AddButton} className="inline mr-4"></img>
                                                <span className="font-normal text-base ">Tambah Kelas</span>
                                            </span> */}
                                    </div>
                                    <div className="card-body p-6 relative">
                                        <div className="rounded-full absolute z-10 w-10 top-0 " style={{marginTop: `-10px`}}>
                                            <Link to="/meet" className="bg-red-600 rounded-3xl p-3 text-white" >
                                                <Video className="inline"/>
                                            </Link>
                                        </div>
                                        <div className="mt-8">
                                            <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-600 rounded-2xl cursor-pointer">
                                                <img src={AddButton} className="inline mr-4"></img>
                                                <span className="font-normal text-base ">Tambah Kelas</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-center p-8 box-border h-32 w-50">
                        <div>
                            <div className=" p-2 rounded-lg ">
                               <p> Postingan </p>
                            </div>
                        </div>
                        <div className="ml-9">
                            <div className=" p-2 rounded-lg">
                                Tentang
                            </div>
                        </div>
                        <div className="ml-9">
                            <div className=" p-2 rounded-lg">
                                Teman
                            </div>
                        </div>
                        <div className="ml-9">
                            <div className=" p-2 rounded-lg">
                                Foto
                            </div>
                        </div>
                        <div className="ml-9">
                            <div className=" p-2 rounded-lg">
                                Video
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mt-5 ml-10 ">
                        <div className="cols-span-1">
                            <h6 className="font-medium text-2xl mt-4 mb-4 flex justify-center md:justify-start">Social Media</h6>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Youtube className="inline mr-3 text-red-600"></Youtube>
                                Youtube
                            </a>
                            </p>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Instagram className="inline mr-3 text-red-600"></Instagram>
                                Instagram
                            </a>
                            </p>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Facebook className="inline mr-3 text-red-600"></Facebook>
                                Facebook
                            </a>
                            </p>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Twitter className="inline mr-3 text-red-600"></Twitter>
                                Twitter
                            </a>
                            </p>
                        </div>
                        <div className="cols-span-2">
                             dsdad
                        </div>
                    </div>

                </div>
                   
            </div>


            {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative px-6 pt-6 flex-auto">
                            {/* <DragAndDropFile/> */}
                            <input
                                type="text"
                                name="name"
                                id="email"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                                placeholder="Judul Tugas"/>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Untuk Siapa Saja"/>
                            <input
                                type="date"
                                name="email"
                                id="email"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Tenggat Pengumpulan"/>
                            <textarea 
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Petunjuk Pengerjaan"/>
                            <button  className="text-red-500">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </button>
                            <button className='text-red-500 ml-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-end p-6">
                            <button
                                className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500"
                                type="button"
                                onClick={this.Modal}>
                                Batal
                            </button>
                            <button
                                className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none"
                                type="submit"
                                onClick={this.Modal}>
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
            </div>
        )
    }
}