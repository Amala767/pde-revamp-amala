// inisiasi library default
import React from "react";
import axios from "axios"
import { baseUrl } from "../../../../config"

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import AddButton from "../../../../assets/add-button.png"
import deleteImg from "../../../../assets/delete.png"



export default class Sertifikasi extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      certification: [],
      name: "",
      gender: "",
      nisn: "",
      phone: "",
      school: "",
      program: "",
      date: "",
      status: ""
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

  getCertification = () => {
    let url = baseUrl + "/submission/certification"
    axios.get(url, this.headerConfig())
      .then(response => {
        this.setState({ certification: response.data.data })
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
    this.getCertification()
  }

  saveCertification = event => {
    event.preventDefault()
    let form = {
      name: this.state.name,
      gender: this.state.gender,
      nisn: this.state.nisn,
      phone: this.state.phone,
      school: this.state.school,
      program: this.state.program,
      date: this.state.date,
      status: this.state.status
    }
    console.log(form)
    let url = baseUrl + "/submission/certification"
    axios.post(url, form, )
      .then(response => {
        window.alert(response.data.message)
        console.log(response)
        this.getCertification()
      })
      .catch(error => console.log(error))
  }

  SplitDate = date => {
    return date.split('T')[0]
  }

  render() {
    return (
      <>
        <LayoutSidebar>
          <div className="pl-12 grid grid-flow-row-dense grid-cols-3 mt-10">
            <div className="col-span-2" >
              <h1 className="text-xl font-semibold">Pengajuan Sertifikasi Online</h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button className="bg-red-600 p-3 text-white rounded-2xl" data-modal-toggle="defaultModal">+ Pengajuan</button>
                </div>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <form onSubmit={ev => this.saveCertification(ev)}>
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-5">
                          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Tambah Sertifikasi Online
                          </h3>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="p-6 space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Nama Siswa" onChange={ev => this.setState({ name: ev.target.value })}></input>
                            {/* <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Jenis Kelamin" onChange={ev => this.setState({ gender: ev.target.value })}></input> */}
                            <select
                              value={this.state.gender}
                              onChange={ev => this.setState({ gender: ev.target.value })}
                              className="rounded-3xl border-slate-300 p-4 text-slate-300">
                              <option value="" disabled selected>Jenis Kelamin</option>
                              <option value="M">Laki-laki</option>
                              <option value="F">Perempuan</option>
                            </select>
                            <input type="number" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="NISN" onChange={ev => this.setState({ nisn: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Nomor HP" onChange={ev => this.setState({ phone: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Asal Sekolah" onChange={ev => this.setState({ school: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Program Keahlian" onChange={ev => this.setState({ program: ev.target.value })}></input>
                            <input type="date" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Tanggal" onChange={ev => this.setState({ date: ev.target.value })}></input>
                            {/* <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Status Sertifikasi" onChange={ev => this.setState({ status: ev.target.value })}></input> */}
                            <select
                              value={this.state.status}
                              onChange={ev => this.setState({ status: ev.target.value })}
                              className="rounded-3xl border-slate-300 p-4 text-slate-300">
                              <option value="" disabled selected>Status</option>
                              <option value="done">Done</option>
                              <option value="process">Process</option>
                              <option value="cancel">Cancel</option>
                            </select>
                            <div className="">
                              <span className="text-sm font-medium text-black inline">Daftar List Siswa Sertifikasi</span>
                              <button type="button" className="ml-20 inline" data-modal-toggle="small-modal">
                                <img className="inline" src={AddButton}></img>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div id="small-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              <div class="flex justify-between items-center p-5">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                  Daftar Siswa
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                              </div>
                              <input type="text" className="rounded-full w-80 h-11 px-8 ml-6 bg-slate-100 border-transparent focus:border-red-5000" placeholder="Search"></input>
                              <div class="p-6 space-y-6">
                                <fieldset>
                                  <legend class="sr-only">Checkbox variants</legend>
                                  <div class="flex items-center mb-4 grid grid-cols-4">
                                    <label for="checkbox-2" class="text-sm font-medium text-gray-900 dark:text-gray-300 col-span-3">
                                      <h6>0283648627</h6>
                                      <h6>RPL</h6>
                                      <h6>Rengga Ardianto</h6>
                                    </label>
                                    <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 ml-4" />
                                  </div>
                                </fieldset>
                              </div>
                              <div class="flex items-center p-6 space-x-2 rounded-b">
                                <button data-modal-toggle="defaultModal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center p-6 space-x-2 rounded-b ">
                          <button data-modal-toggle="defaultModal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                          <button data-modal-toggle="defaultModal" type="submit" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-dark border-red-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">3<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                      </li>
                    </ul>
                  </div>
                  <input type="text" className="rounded-full w-64 h-11 px-8 border-red-400" placeholder="Search" style={{ border: `1px solid #E70000` }}></input>
                </div>
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Nama dan Jenis Kelamin
                      </th>
                      <th scope="col" class="px-6 py-3">
                        NISN & Nomer Telepon
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Asal Sekolah & Prodi
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Tanggal & Status Sertifikasi
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Opsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.certification.map(item => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <>
                          <td class="w-4 p-4">
                            <h6 className="text-black text-sm font-semibold">{item.name}</h6>
                            <span className="text-black text-xs font-normal">{item.gender}</span>
                          </td>
                          <td class="px-6 py-4">
                            <h6 className="text-black text-sm font-semibold">{item.nisn}</h6>
                            <span className="text-black text-xs font-normal">{item.phone}</span>
                          </td>
                          <td class="px-6 py-4">
                            <h6 className="text-black text-sm font-semibold">{item.school}</h6>
                            <span className="text-black text-xs font-normal">{item.program}</span>
                          </td>
                          <td class="px-6 py-4">
                            <h6 className="text-black text-sm font-semibold">{this.SplitDate(item.date)}</h6>
                            <span className="text-black text-xs font-normal">{item.status}</span>
                          </td>
                        </>

                        <td class="px-6 py-4 text-right">
                          <button data-modal-toggle="popup-delete" class="p-2 font-medium text-white dark:text-white btn-warning inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                          <button data-modal-toggle="edit-modal" class="p-2 font-medium text-white dark:text-white btn-warning inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Edit Data */}
          <div id="edit-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex justify-between items-start p-5">
                  <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Edit Sertifikasi Online
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
                <div class="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="date" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Tanggal Sertifikasi"></input>
                    <div className="">
                      <span className="text-sm font-medium text-black inline">Daftar List Siswa Sertifikasi</span>
                      <button type="button" className="ml-20 inline" data-modal-toggle="edit-modal-detail">
                        <img className="inline" src={AddButton}></img>
                      </button>
                    </div>
                    <input type="number" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Jumlah Siswa"></input>
                  </div>
                </div>
                <div id="edit-modal-detail" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                  <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div class="flex justify-between items-center p-5">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                          Daftar Siswa
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                      </div>
                      <input type="text" className="rounded-full w-80 h-11 px-8 ml-6 bg-slate-100 border-transparent focus:border-red-5000" placeholder="Search"></input>
                      <div class="p-6 space-y-6">
                        <fieldset>
                          <legend class="sr-only">Checkbox variants</legend>
                          <div class="flex items-center mb-4 grid grid-cols-4">
                            <label for="checkbox-2" class="text-sm font-medium text-gray-900 dark:text-gray-300 col-span-3">
                              <h6>0283648627</h6>
                              <h6>RPL</h6>
                              <h6>Rengga Ardianto</h6>
                            </label>
                            <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 ml-4" />
                          </div>
                        </fieldset>
                      </div>
                      <div class="flex items-center p-6 space-x-2 rounded-b">
                        <button data-modal-toggle="edit-modal-detail" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                        <button data-modal-toggle="edit-modal-detail" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center p-6 space-x-2 rounded-b ">
                  <button data-modal-toggle="edit-modal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                  <button data-modal-toggle="edit-modal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan</button>
                </div>
              </div>
            </div>
          </div>
          {/* Pop Up Delete */}
          <div id="popup-delete" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex justify-end p-2">
                </div>
                <div class="p-6 pt-0 text-center">
                  <img className="mx-auto" src={deleteImg}></img>
                  <h2 className="text-lg font-semibold text-black">Hapus Guru Tamu?</h2>
                  <h3 class="mb-5 text-base font-normal text-black mt-4">Apakah anda yakin ingin menghapus data guru tamu ini?</h3>
                  <button data-modal-toggle="popup-delete" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                  <button data-modal-toggle="popup-delete" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center ml-2">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}