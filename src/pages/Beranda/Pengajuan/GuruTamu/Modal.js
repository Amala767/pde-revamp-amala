import React, {useState} from "react";

export default function Modal({ handleChange }) {
  const [show, setShow] = useState(false);
  
  return (
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <form onSubmit={(ev) => this.saveGuest(ev)}>
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-between items-start p-5 rounded-t">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">Tambah Tamu Guru</h3>
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
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Tanggal Kunjungan" onChange={(ev) => this.setState({ visitDate: ev.target.value })}></input>
              <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Keperluan" onChange={(ev) => this.setState({ necessity: ev.target.value })}></input>
              <input type="time" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Jam Masuk" onChange={(ev) => this.setState({ in: ev.target.value })}></input>
              <input type="text" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Jumlah Keluar" onChange={(ev) => this.setState({ teacher: ev.target.value })}></input>
              <input type="time" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Jam Keluar" onChange={(ev) => this.setState({ out: ev.target.value })}></input>
              <div className="">
                <span className="text-sm font-medium text-black">Daftar List Tambah Guru</span>
                <button type="button" className="ml-24" data-modal-toggle="small-modal">
                  <img src={AddButton}></img>
                </button>
              </div>
            </div>
          </div>
          <div id="small-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex justify-between items-center p-5 rounded-t">
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">Daftar Guru</h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="small-modal"
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
                <input type="text" className="rounded-full w-80 h-11 px-8 ml-6 bg-slate-100 border-transparent focus:border-red-5000" placeholder="Search"></input>
                <div class="p-6 space-y-6">
                  <fieldset>
                    <legend class="sr-only">Checkbox variants</legend>
                    <div class="flex items-center mb-4 grid grid-cols-4">
                      <label for="checkbox-2" class="text-sm font-medium text-gray-900 dark:text-gray-300 col-span-3">
                        <h6>0283648627</h6>
                        <h6>Rengga Ardianto</h6>
                        <h6>Rangkaian Listrik</h6>
                      </label>
                      <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 ml-4" />
                    </div>
                    <div class="flex items-center mb-4 grid grid-cols-4">
                      <label for="checkbox-2" class="text-sm font-medium text-gray-900 dark:text-gray-300 col-span-3">
                        <h6>0283648627</h6>
                        <h6>Rizal Ardianto</h6>
                        <h6>Rangkaian Listrik</h6>
                      </label>
                      <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 ml-4" />
                    </div>
                  </fieldset>
                </div>
                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="small-modal"
                    type="button"
                    class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Batal
                  </button>
                  <button
                    data-modal-toggle="small-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Simpan
                  </button>
                </div>
              </div>
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
              Ajukan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
