import React from "react";
import { Book, Clock, File } from 'react-feather';
import { Link } from "react-router-dom";

import LayoutSidebar from "../../../../../../components/Layout/LayoutSidebar";
import CardSiswa from "../../../../../../components/fragment/Lms/Guru/CardSiswa";

export default class DetailTugas extends React.Component{
    constructor(){
        super()
        this.state={}
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
                            <div className="mb-8 grid grid-cols-4">
                                <h1 className="col-span-3 font-semibold text-3xl inline">Daftar Kelas Belajar</h1>
                            </div>
                            <div className="mt-8">
                                <div className="card bg-white p-8 rounded-3xl mt-4">
                                    <div className="grid grid-cols-10">
                                        <div className=" bg-red-600 py-3 px-4 rounded-full mx-1"><File className="text-white" /></div>
                                        <div className="col-span-6 ml-3">
                                            <Link to="/detailTugas" className="font-medium text-base">Latihan Soal Matematika</Link>
                                            <h4 className="font-normal text-sm">Matematika XII RPL 4 - 12 April 2022</h4>
                                        </div>
                                        <div className="col-span-3">
                                            <h1 className="font-normal text-sm mt-3 text-red-600">Tenggat : 12 April 2021</h1>
                                        </div>
                                    </div>
                                    <hr className="mt-8"/>
                                    <h1 className="mt-4 text-base font-medium">10/40 Siswa Sudah Mengumpulkan</h1>
                                    <div className="grid grid-cols-2 gap-2">
                                        <CardSiswa/>
                                        <CardSiswa/>
                                        <CardSiswa/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                  <div className="pl-32 mt-10">
                      <div className="flex flex-row">
                          <h4 className="text-lg font-semibold">Marketplace</h4>
                      </div>
                      <div className="mt-8">
                          <Link to="/lmsGuru" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
                              <span className="font-normal text-base "><Book className="mr-2 inline"/> Daftar Kelas</span>
                          </Link>
                      </div>
                      <div className="mt-6 ml-5">
                          <Link to="/aktifitasGuru">
                              <span className="font-normal text-base "><Clock className="mr-2 inline" /> Aktifitas Terbaru</span>
                          </Link>
                      </div>
                  </div>
                </div>
            </div>   
             </LayoutSidebar>   
            </div>       
        )
    }
}