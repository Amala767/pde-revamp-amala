// inisiasi library default
import React from "react";
import Calendar from "react-calendar/dist/umd/Calendar";

// inisiasi component
import LayoutNavbar from "../../../components/Layout/LayoutNavbar";
import Footer from "../../../components/fragment/Footer";
import { User, Youtube, Instagram, Facebook, Twitter } from "react-feather";
import imageCard from '../../../assets/image-card.png';




export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <div className="bg-slate-50">
        <div className="bg-landing">
          <LayoutNavbar className="p-10 " />
        </div>
        <div className="grid grid-cols-5 px-20 mt-5">
            <div className="col-span-3">
                <div className="text-4xl">
                    <b>SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</b>
                </div>
                <div className="text-gray-500 text-semibold mt-3 mb-5">
                    <span>19/02/2022, 14:18 </span> 
                    <button className="inline"><User className="ml-3 mr-2 inline w-4"></User>John Doe</button>
                </div>
                <img src={imageCard} className="w-screen " />
                <div className="mt-8 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed cras at duis et, elit euismod tortor. Fames cras eget purus tempus eget tincidunt consectetur at. Amet, dolor, nec luctus leo posuere in sit vel. Imperdiet purus viverra in eu enim. Ut est varius sed aliquam mattis donec purus euismod pellentesque. Id dictum cras id tempor.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed cras at duis et, elit euismod tortor. Fames cras eget purus tempus eget tincidunt consectetur at. Amet, dolor, nec luctus leo posuere in sit vel. Imperdiet purus viverra in eu enim. Ut est varius sed aliquam mattis donec purus euismod pellentesque. Id dictum cras id tempor.</p>
                    <br></br>
                    <p>Neque amet enim auctor pulvinar. A enim consequat at porta. Nunc tincidunt enim sed praesent netus netus quis tortor non. Amet, cursus aliquam massa cras non est. Lacinia neque urna sed maecenas amet ullamcorper id porttitor tristique. Suscipit nunc neque, dictum condimentum amet sagittis aliquam.</p>               
                    <br></br>
                    <p>Neque amet enim auctor pulvinar. A enim consequat at porta. Nunc tincidunt enim sed praesent netus netus quis tortor non. Amet, cursus aliquam massa cras non est. Lacinia neque urna sed maecenas amet ullamcorper id porttitor tristique. Suscipit nunc neque, dictum condimentum amet sagittis aliquam.</p>               
                    <br></br>
                    <p>Neque amet enim auctor pulvinar. A enim consequat at porta. Nunc tincidunt enim sed praesent netus netus quis tortor non. Amet, cursus aliquam massa cras non est. Lacinia neque urna sed maecenas amet ullamcorper id porttitor tristique. Suscipit nunc neque, dictum condimentum amet sagittis aliquam.</p>               
                </div>
                <div class="flex flex-row justify-center p-6 box-border h-32 w-50 text-white">
                    <div>
                        <div className="bg-red-600 p-2 rounded-lg ">
                            <Youtube className=" inline w-10"></Youtube>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="bg-pink-400 p-2 rounded-lg"> 
                        <Instagram className="inline w-10"></Instagram>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Facebook className="inline w-10"></Facebook>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="bg-sky-400 p-2 rounded-lg">
                        <Twitter className=" inline w-10"></Twitter>
                        </div>
                    </div>
                </div>
                <div className="mt-8 mb-8 w-9/12">
                    <h1 className="text-lg font-semibold">Berita Populer</h1>
                    <hr className="w-24 h-1 rounded-full bg-red-600 mt-1 mb-8"></hr>
                    <div className="mt-4">
                        <h4 className="text-base font-semibold">SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</h4>
                        <div className="text-gray-500 text-sm mt-2">
                            <span>19/02/2022, 14:18 </span> 
                            <button className="inline"><User className="ml-3 mr-2 inline w-4"></User>John Doe</button>
                        </div>
                        <hr className="mt-4 w-96"/>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-base font-semibold">SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</h4>
                        <div className="text-gray-500 text-sm mt-2">
                            <span>19/02/2022, 14:18 </span> 
                            <button className="inline"><User className="ml-3 mr-2 inline w-4"></User>John Doe</button>
                        </div>
                        <hr className="mt-4 w-96"/>
                    </div>
                </div>
            </div>
            <div className="col-span-2 pl-24">
                <h1 className="text-lg font-semibold">Berita Populer</h1>
                <hr className="w-24 h-1 rounded-full bg-red-600 mt-1 mb-8"></hr>
                <div className="mt-4">
                    <h4 className="text-base font-semibold">SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</h4>
                    <div className="text-gray-500 text-sm mt-2">
                        <span>19/02/2022, 14:18 </span> 
                        <button className="inline"><User className="ml-3 mr-2 inline w-4"></User>John Doe</button>
                    </div>
                    <hr className="mt-4"/>
                </div>
                <div className="mt-4">
                    <h4 className="text-base font-semibold">SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</h4>
                    <div className="text-gray-500 text-sm mt-2">
                        <span>19/02/2022, 14:18 </span> 
                        <button className="inline"><User className="ml-3 mr-2 inline w-4"></User>John Doe</button>
                    </div>
                    <hr className="mt-4"/>
                </div>
                <div className="mt-8">
                    <h1 className="text-lg font-semibold">Kalender</h1>
                    <div className="bg-white rounded-xl w-80 p-8 mt-12">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
         
          
          
        <Footer />
      </div>
    );
  }
}
