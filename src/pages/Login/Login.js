// inisiasi library default
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../config';
import image from '../../assets/image-login.svg';
import eye from '../../assets/icon-eye.svg';

// inisiasi component
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      email: '',
      password: '',
      // roles: '',
    };

    this.state.showModal = false;
    this.state.showPassword = false;
    this.state.showPasswordModal = false;
  }

  Password = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  PasswordModal = () => {
    this.setState({
      showPasswordModal: !this.state.showPasswordModal,
    });
  };

  Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  Login = (event) => {
    event.preventDefault();
    let sendData = {
      email: this.state.email,
      password: this.state.password,
      // roles: this.state.roles,
    };
    let url = baseUrl + '/users/login';
    axios
      .post(url, sendData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==',
        },
      })
      .then((response) => {
        console.log(sendData);
        if (sendData != null) {
          let data = response.data.data;
          let token = response.data.data.accessToken;
          localStorage.setItem('data', JSON.stringify(data));
          localStorage.setItem('token', token);
          this.props.history.push('/beranda');
        } else {
          this.setState({ message: response.data.message });
          this.props.history.push('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        {' '}
        <div className="h-screen flex">
          {' '}
          <div className="flex w-1/2 justify-center items-center">
            <div>
              <h1 className="font-semibold text-3xl">Login</h1>
              <h3 className="text-2xl mt-2">Login to connect with us</h3>
              <form
                action="#"
                method="POST"
                className="mt-8"
                onSubmit={(ev) => this.Login(ev)}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={(ev) => this.setState({ email: ev.target.value })}
                />
                <div className="flex flex-row justify-start items-center">
                  <input
                    type={this.state.showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                    placeholder="Enter your Password"
                    value={this.state.password}
                    onChange={(ev) =>
                      this.setState({ password: ev.target.value })
                    }
                  />
                  <img
                    src={eye}
                    onClick={() => this.Password()}
                    className="cursor-pointer absolute w-7 mt-2 ml-80"
                  />
                </div>
                {/* <select
                  value={this.state.roles}
                  onChange={(ev) => this.setState({ roles: ev.target.value })}
                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4 text-gray-500 appearance-none"
                >
                  <option value="" disabled selected>
                    {' '}
                    User Role
                  </option>
                  <option value="1">Headmaster</option>
                  <option value="2">Teacher</option>
                  <option value="3">Student</option>
                  <option value="4">Vocation Net</option>
                  <option value="5">Telkom Group</option>
                  <option value="6">Ministry</option>
                  <option value="7">Super Admin</option>
                </select> */}
                <label
                  className="block text-red-500 mt-2 text-sm ml-64"
                  onClick={() => this.Modal()}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Forget Password?
                </label>
                <button
                  type="submit"
                  className="justify-center mt-8 w-96 py-4 px-6 border border-transparent rounded-full text-lg font-medium text-white bg-red-500 hover:bg-red-700"
                  onClick={(ev) => this.Login(ev)}
                >
                  Login
                </button>
              </form>
              <h6 className="text-sm mt-2 text-gray-400">
                Dont have account?
                <Link to="/registrasi">
                  <span className="text-red-500">Sign up</span>
                </Link>
              </h6>
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <img src={image} alt="image-login" />
          </div>
          {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between px-6 pt-8">
                      <h3 className="text-lg font-semibold">Forgot Password</h3>
                    </div>
                    <div className="relative px-6 pt-4 flex-auto">
                      <p className="text-black font-normal text-base leading-relaxed">
                        Masukan email yang sudah anda daftarkan untuk
                        <br />
                        merubah password
                      </p>
                    </div>
                    <div className="relative px-6 pt-6 flex-auto">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                        placeholder="Enter your Email"
                      />
                      <div className="flex flex-row justify-start items-center">
                        <input
                          type={
                            this.state.showPasswordModal ? 'text' : 'password'
                          }
                          name="password"
                          id="password"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                          placeholder="Enter your Password"
                          value={this.state.passwordModal}
                          onChange={(ev) =>
                            this.setState({ passwordModal: ev.target.value })
                          }
                        />
                        <img
                          src={eye}
                          onClick={() => this.PasswordModal()}
                          className="cursor-pointer absolute w-7 mt-2 ml-80"
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                        placeholder="Enter your OTP Code"
                      />
                    </div>
                    <div className="flex items-center justify-end p-6">
                      <button
                        className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500"
                        type="button"
                        onClick={this.Modal}
                      >
                        Batal
                      </button>
                      <button
                        className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none"
                        type="submit"
                        onClick={this.Modal}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}
