import React from 'react'
import {  NavLink } from "react-router-dom";

import {Home, Camera, Edit2, MapPin, Youtube, Image, MessageSquare, Sliders, Settings, ThumbsUp,
    MessageCircle, Share2, Globe, MoreHorizontal, Smile, Paperclip} from 'react-feather'

import viewakun from "../../../assets/viewakun.png"
import UserLog from '../../../assets/user-login.png';
import AddButton from "../../../assets/icon-add.svg"



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
            <div className="bg-gray-100 px-10">
                <div>
                    
                </div>
                <div className="grid grid-cols-12 flex justify-center">
                <div className=""></div>
                <div class="grid grid-flow-row-dense grid-cols-3 pt-12 col-span-10">
                    <div class="col-span-3">
                        <div className="card relative rounded-3xl mb-5">
                            <img src={viewakun} className="contrast-50 rounded-3xl w-screen" />
                            <div class="absolute">
                                <div className="absolute z-10  top-0 left-0" style={{marginTop: `-70px`, marginLeft: '800px', width: '500px'}}>
                                    <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 bg-gray-200 rounded-2xl cursor-pointer">
                                        <Camera className="inline mr-4"></Camera>
                                        <span className="font-normal text-base ">Edit Foto Sampul</span>
                                    </span>
                                </div>
                            </div>
                            <div class="absolute">
                                <div className="rounded-full absolute z-10 w-10 top-0 " style={{marginTop: `-50px`, marginLeft: '50px', width: '480px'}}>
                                    <img src={UserLog} style={{width: `160px`, border: '12px solid-white'}}></img>
                                </div>
                            </div>
                            <div className='' style={{marginLeft: '250px'}}>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6'>
                                        <h1 className="text-2xl font-semibold"> John Deo Alfredo</h1>
                                        <span className="text-slate-500">2 rb Teman</span>
                                        <div class="mt-3 flex -space-x-2 overflow-hidden">
                                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                        </div>
                                    </div>
                                    <div className='col-span-6 inline mt-10'>
                                        <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer mr-2">
                                            <img src={AddButton} className="inline mr-4"></img>
                                            <span className="font-normal text-base ">Tambah cerita</span>
                                        </span>
                                        <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer">
                                            <Edit2 className="inline mr-4"></Edit2>
                                            <span className="font-normal text-base ">edit Sampul</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    <div class="flex flex-row mt-30 justify-center mt-20 text-xl font-medium">
                        <div className="pr-11">
                            <div className=" ">
                               <p> Postingan </p>
                            </div>
                        </div>
                        <div className="px-11">
                            <div className="">
                                Tentang
                            </div>
                        </div>
                        <div className="px-11">
                            <div className="">
                                Teman
                            </div>
                        </div>
                        <div className="px-11">
                            <div className="">
                                Foto
                            </div>
                        </div>
                        <div className="px-11">
                            <div className=" ">
                                Video
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mt-10 ml-10 ">
                        <div className="col-span-1">
                            <h6 className="font-medium text-2xl mt-4 mb-4 flex justify-center md:justify-start">Perkenalan</h6>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Home className="inline mr-3 text-red-600"></Home>
                                Belajar di Telkom University
                            </a>
                            </p>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Home className="inline mr-3 text-red-600"></Home>
                                Pernah Belajar di SMK Telkom Malang
                            </a>
                            </p>
                            <p className="mb-2 text-base font-normal">
                            <a href="#!">
                                <Home className="inline mr-3 text-red-600"></Home>
                                Tinggal di Sidoarjo
                            </a>
                            </p>
                            <p className="mb-2 text-base font-normal ">
                            <a href="#!">
                                <MapPin className="inline mr-3 text-red-600"></MapPin>
                                Dari Sidoarjo
                            </a>
                            </p>
                            <br></br>
                            <button onClick={() => this.Modal()} className="h-10 w-full text-white bg-red-600 rounded-2xl cursor-pointer">
                                <span className="font-normal text-base ">edit Bio</span>
                            </button>
                        </div>
                        <div className="col-span-2 pl-20">
                            <div className="bg-white p-6 rounded-xl grid grid-cols-12">
                                <div className="col-span-2">
                                    <img src={UserLog}></img>
                                </div>
                                <div className="col-span-10">
                                    <input type="text" className="w-full bg-gray-100 rounded-full px-10 py-3 border-none" placeholder="Apa yang anda pikirkan sekarang?"></input>
                                    <div className="grid grid-cols-3 text-sm font-medium mt-8">
                                        <button>
                                            <Youtube className="inline mr-2 text-3xl"/>
                                            <span className="text-gray-300">Siaran</span>
                                        </button>
                                        <button>
                                            <Image className="inline mr-2 text-3xl"/>
                                            <span className="text-gray-300">Foto/Video</span>
                                        </button>
                                        <button>
                                            <MessageSquare className="inline mr-2 text-3xl"/>
                                            <span className="text-gray-300">Forum</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 ml-5 mt-10'>
                        <div className='col-span-10'>
                            <b><h4 className="font-semibold text-3xl flex justify-center md:justify-start">Postingan</h4></b>
                        </div>
                        <div className='col-span-2 inline'>
                            <span onClick={() => this.Modal()} className="p-3  text-white bg-red-600 rounded-2xl md:justify-end cursor-pointer mr-2">
                                <Sliders className="inline"></Sliders>
                            </span>
                            <span onClick={() => this.Modal()} className="p-3 text-white bg-red-600 rounded-2xl md:justify-end cursor-pointer">
                                <Settings className="inline"></Settings>
                            </span>
                        </div>
                    </div>

                    <div className="bg-white p-12 rounded-3xl">
                    <div className="flex flex-row grid grid-cols-12">
                        <div className="flex items-center col-span-11">
                          <img src={UserLog} className="rounded-full w-15 h-15 self-center mr-4"></img>
                          <div>
                            <h1 style={{ fontWeight: "600", fontSize: "20px", }}>John Doe Alfredo</h1>
                            <span className="text-slate-500">Yesterday, at 12.04</span>
                            <Globe color="#EF4444" className="inline ml-2"/>
                          </div>
                        </div>
                        <div className="text-red-600">
                              <MoreHorizontal/>
                          </div>
                      </div>
                      <NavLink to="/templateBlog" className="flex flex-col">
                        <p style={{ marginBottom: "15px", marginTop: "15px", fontWeight: "400", fontSize: "15px"}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur corrupti quos odit enim nisi sed asperiores dignissimos, harum, ullam earum eius rem molestiae quod non necessitatibus unde amet. Illum vero delectus dignissimos quisquam voluptates ab sit. Natus autem consequuntur, minima dicta reiciendis nemo a molestiae mollitia vitae pariatur! Voluptas.
                        </p>
                        <img src="https://redaksi.pens.ac.id/wp-content/uploads/2018/12/photo-1529101091764-c3526daf38fe.jpg" className="object-cover rounded-3xl" />
                      </NavLink>

                      <div className='grid grid-cols-12 mt-5'>
                          <div className='col-span-7'>
                                <div class="relative">
                                    <input class="focus:ring-red-500 focus:border-red-500 rounded-full w-full h-11 mt-5 px-8 border-none bg-gray-100" text-black="text-black" type="text" name="search" placeholder="Tulis Komentar"></input>
                                    <button type="submit" class="absolute right-5 top-7 ">
                                    <Smile className=" inline mr-3 text-red-600"></Smile>
                                    <Camera className=" inline mr-3 text-red-600"></Camera>
                                    <Paperclip className="inline mr-3 text-red-600"></Paperclip>
                                    </button>
                                </div>
                          </div>
                          <div className="col-span-2"></div>
                            <div class="grid grid-cols-3 col-span-3">
                                <button className="inline">
                                    <ThumbsUp className="inline mr-2" />
                                    <span>12</span>
                                </button>
                                <button className="inline">
                                    <MessageCircle className="inline mr-2" />
                                    <span>12</span>
                                </button>
                                <button className="inline">
                                    <Share2 className="inline mr-2" />
                                    <span>12</span>
                                </button>
                            </div>
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
            </>
        ) : null}
                </div>

            </div>
        )
    }
}