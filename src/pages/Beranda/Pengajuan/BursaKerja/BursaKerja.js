// inisiasi library default
import React from "react";
import axios from "axios"
import { baseUrl } from "../../../../config"

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
// import AddButton from "../../../../assets/add-button.png"
import deleteImg from "../../../../assets/delete.png"
import { Link } from "react-router-dom";

export default class BursaKerja extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      job: [],
      jobTitle: "",
      description: "",
      condition: "",
      date: ""
    };

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token")
    } else {
      window.location = "/login"
    }
    this.headerConfig.bind(this)
    this.state.showDelete = false;
    this.state.showEdit = false;
  }

  Delete = () => {
    this.setState({
      showDelete: !this.state.showDelete,
    });
  };

  Edit = selectedItem => {
    this.setState({
      showEdit: !this.state.showEdit,
    });
    this.setState({
      jobTitle: selectedItem.jobTitle,
      description: selectedItem.description,
      condition: selectedItem.condition,
      date: selectedItem.date
    })
    console.log(selectedItem)
  };

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` }
    }
    return header
  }

  getJob = () => {
    let url = baseUrl + "/submission/job"
    axios.get(url, this.headerConfig())
      .then(response => {
        this.setState({ job: response.data.data })
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
    this.getJob()
  }

  saveJob = event => {
    event.preventDefault()
    let form = {
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      condition: this.state.condition,
      date: this.state.date
    }
    console.log(form)
    let url = baseUrl + "/submission/job"
    axios.post(url, form,this.headerConfig())
      .then(response => {
        window.alert(response.data.message)
        console.log(response)
        this.getJob()
      })
      .catch(error => console.log(error))
  }

  SplitDate = date => {
    return date.split('T')[0]
  }

  drops = selectedItem => {
        let url = baseUrl + "/submission/job/" + selectedItem.submissionId
        console.log(url)
        axios.delete(url, this.headerConfig())
        .then(response => {
            window.alert(response.data.message)
            this.getJob()
        })
        .catch(error => console.log(error))
  }

  Edits = selectedItem => {
    console.log(selectedItem)
    let form = {
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      condition: this.state.condition,
      date: this.state.date
    }
    console.log(form)
    // let url = baseUrl + "/submission/job/" + selectedItem.submissionId
    console.log(selectedItem.submissionId)
    // axios.put(url, form,this.headerConfig())
    //   .then(response => {
    //     window.alert(response.data.message)
    //     console.log(response)
    //     this.getJob()
    //     this.Edit()
    //   })
    //   .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <LayoutSidebar>
          <div className="pl-12 grid grid-flow-row-dense grid-cols-3 mt-10">
            <div className="col-span-2" >
              <h1 className="text-xl font-semibold">Pengajuan Bursa Kerja</h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button className="bg-red-600 p-3 text-white rounded-2xl" data-modal-toggle="defaultModal" >+ Tambah Lowongan</button>
                  <button className="bg-white p-3 text-red-600 rounded-2xl ml-4"><Link to="/pengajuanBursa">Pengajuan</Link></button>
                </div>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <form onSubmit={ev => this.saveJob(ev)}>
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-5 rounded-t">
                          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Pengajuan Bursa Kerja
                          </h3>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="p-6 space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Nama Jabatan Kerja" onChange={ev => this.setState({ jobTitle: ev.target.value })}></input>
                            <input type="date" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Tanggal Pengajuan" onChange={ev => this.setState({ date: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Deskripsi" onChange={ev => this.setState({ description: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Persyaratan" onChange={ev => this.setState({ condition: ev.target.value })}></input>
                            {/* post bagian persyaratan dalam string tapi sari checkbox */}
                            <div className="">
                              <span className="text-sm font-medium text-black inline">Persyaratan</span>
                              <div class="flex items-center mt-2">
                                <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 rounded border-red-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600"></input>
                                <label for="checkbox-3" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Menguasi 3 Bahasa Pemrograman</label>
                              </div>
                              <div class="flex items-center mt-2">
                                <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 rounded border-red-300 focus:ring-red-500 dark:focus:ring-res-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600"></input>
                                <label for="checkbox-3" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mampu Bekerja Sama</label>
                              </div>
                            </div>
                            <input type="number" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Jumlah Siswa"></input>
                            <input class=" w-full text-sm text-gray-900 bg-gray-50 rounded-lg border cursor-pointer  focus:outline-none focus:border-transparent dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>

                          </div>
                        </div>
                        <div id="small-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                  Small modal
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                              </div>
                              <div class="p-6 space-y-6">
                                <fieldset>
                                  <legend class="sr-only">Checkbox variants</legend>
                                  <div class="flex items-center mb-4 grid grid-cols-5">
                                    <label for="checkbox-1" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                    <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                  </div>
                                  <div class="flex items-center mb-4 grid grid-cols-5">
                                    <label for="checkbox-2" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                    <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                  </div>
                                </fieldset>
                              </div>
                              <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
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
              <div class="relative overflow-x-auto shadow-md ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-white uppercase dark:text-gray-400" style={{background:"#474747"}}>
                    <tr>
                    <th scope="col" class="px-6 py-3">
                        No.
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Nama Jabatan Kerja
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Deskripsi
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Persyaratan
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Tanggal Due Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Opsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.job.map((item, index) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="w-4 p-4">
                          <h6 className="text-black font-semibold text-sm">{index+1}</h6>
                        </td>
                        <td class="w-4 p-4">
                          <h6 className="text-black font-semibold text-sm">{item.jobTitle}</h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-semibold text-sm">{item.description}</h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-semibold text-sm">{item.condition}</h6>
                          {/* <h6 className="text-black font-semibold text-sm">2. Mampu bekerjasama</h6> */}
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                          {this.SplitDate(item.date)}
                        </td>
                        <td class="px-6 py-4 text-right">
                          <div className="flex flex-row">
                          <button data-modal-toggle="popup-delete" class="font-large p-2 text-white dark:text-white inline btn" onClick={() => this.Delete(item)} style={{background:"#E7008A" , borderRadius:"5px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                          <button data-modal-toggle="edit-modal" class="font-large p-2 text-white dark:text-white inline btn ml-2" onClick={() => this.Edit(item)} style={{background:"#58ADFC", borderRadius:"5px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          </div>
                          {this.state.showEdit ? (
                            <>
                          <div id="edit-modal" tabindex="-1" aria-hidden="true" class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                            <form onSubmit={() => this.Edits(item)}>
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-5 rounded-t">
                          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Pengajuan Bursa Kerja
                          </h3>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" onClick={() => this.Edit()}>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </button>
                        </div>
                        <div class="p-6 space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <input type="text" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Nama Jabatan Kerja" value={this.state.jobTitle} onChange={ev => this.setState({ jobTitle: ev.target.value })}></input>
                            <input type="date" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Tanggal Pengajuan" value={this.state.date} onChange={ev => this.setState({ date: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Deskripsi" value={this.state.description} onChange={ev => this.setState({ description: ev.target.value })}></input>
                            <input type="text" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Persyaratan" value={this.state.condition} onChange={ev => this.setState({ condition: ev.target.value })}></input>
                            {/* post bagian persyaratan dalam string tapi sari checkbox */}
                          </div>
                        </div>
                        <div class="flex items-center p-6 space-x-2 rounded-b ">
                          <button data-modal-toggle="defaultModal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => this.Edit()}>Batal</button>
                          <button data-modal-toggle="defaultModal" type="submit" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan</button>
                        </div>
                      </div>
                    </form>
                              {/* <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div class="flex justify-between items-start p-5 rounded-t">
                                  <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                    Tambah Sertifikasi Onlie
                                  </h3>
                                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-modal">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  </button>
                                </div>
                                <div class="p-6 space-y-6">
                                  <div className="grid grid-cols-2 gap-4">
                                    <input type="date" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Tanggal Sertifikasi"></input>
                                    <div className="">
                                      <span className="text-sm font-medium text-black">Daftar List Siswa Sertifikasi</span>
                                      <button type="button" className="ml-20" data-modal-toggle="edit-detail-modal">
                                        <img src={AddButton}></img>
                                      </button>
                                    </div>
                                    <input type="number" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Jumlah Siswa"></input>
                                  </div>
                                </div>
                                <div id="edit-detail-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                                  <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                      <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                          Small modal
                                        </h3>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-detail-modal">
                                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                      </div>
                                      <div class="p-6 space-y-6">
                                        <fieldset>
                                          <legend class="sr-only">Checkbox variants</legend>
                                          <div class="flex items-center mb-4 grid grid-cols-5">
                                            <label for="checkbox-1" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                            <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                          </div>
                                          <div class="flex items-center mb-4 grid grid-cols-5">
                                            <label for="checkbox-2" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                            <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                          </div>
                                        </fieldset>
                                      </div>
                                      <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                        <button data-modal-toggle="edit-detail-modal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                        <button data-modal-toggle="edit-detail-modal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex items-center p-6 space-x-2 rounded-b ">
                                  <button data-modal-toggle="edit-modal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                  <button data-modal-toggle="edit-modal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan</button>
                                </div>
                              </div> */}
                            </div>
                          </div>
                          </>
                          ) : null}
                          {/* Pop Up Delete */}
                          {this.state.showDelete ? (
                            <>
                          <div id="popup-delete" tabindex="-1" class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div class="flex justify-end p-2">
                                </div>
                                <div class="p-6 pt-0 text-center">
                                  <img className="mx-auto" src={deleteImg}></img>
                                  <h2 className="text-lg font-semibold text-black">Hapus Guru Tamu?</h2>
                                  <h3 class="mb-5 text-base font-normal text-black mt-4">Apakah anda yakin ingin menghapus data guru tamu ini?</h3>
                                  <button data-modal-toggle="popup-delete" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => this.Delete()}>Batal</button>
                                  <button data-modal-toggle="popup-delete" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center ml-2" onClick={() => this.drops(item)}>
                                    Hapus
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          </>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}
