// inisiasi library default
import React from "react";
// import { ReCAPTCHA } from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config";
import image from "../../assets/image-login.svg";
import axios from "axios";
import eye from "../../assets/icon-eye.svg";

// inisiasi component

export default class Registrasi extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      name: "",
      email: "",
      password: "",
      roles: "",
    };

    this.state.showPassword = false;
    this.state.showRetypePassword = false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  Password = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  RetypePassword = () => {
    this.setState({
      showRetypePassword: !this.state.showRetypePassword,
    });
  };

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  Regis = (event) => {
    event.preventDefault();
    let sendData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      roles: this.state.roles,
    };
    let url = baseUrl + "/users/register";
    axios
      .post(url, sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==",
        },
      })
      .then((response) => {
        console.log(sendData);
        if (sendData != null) {
          // let data = response.data.data;
          // localStorage.setItem("data", JSON.stringify(data));
          this.props.history.push("/login");
        } else {
          this.setState({ message: response.data.message });
          this.props.history.push("/registrasi");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="h-screen flex">
        {" "}
        <div className="flex w-1/2 justify-center items-center">
          <div>
            <h1 className="font-semibold text-3xl">Sign Up</h1>
            <h3 className="text-2xl mt-2">Sign up to connect with us</h3>
            <form action="#" method="POST" className="mt-8" onSubmit={(ev) => this.Regis(ev)}>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                placeholder="Your name"
                value={this.state.name}
                onChange={(ev) => this.setState({ name: ev.target.value })}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                placeholder="Enter your Email"
                value={this.state.email}
                onChange={(ev) => this.setState({ email: ev.target.value })}
              />
              <select
                value={this.state.roles}
                onChange={(ev) => this.setState({ roles: ev.target.value })}
                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4 text-gray-500 appearance-none"
              >
                <option value="" disabled selected>
                  {" "}
                  User Role
                </option>
                <option value="1">Headmaster</option>
                <option value="2">Teacher</option>
                <option value="3">Student</option>
                <option value="4">Vocation Net</option>
                <option value="5">Telkom Group</option>
                <option value="6">Ministry</option>
                <option value="7">Super Admin</option>
              </select>
              <div className="flex flex-row justify-start items-center">
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={(ev) => this.setState({ password: ev.target.value })}
                />
                <img src={eye} onClick={() => this.Password()} className="cursor-pointer absolute w-7 mt-2 ml-80" />
              </div>
              <div className="flex flex-row justify-start items-center">
                <input
                  type={this.state.showRetypePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                  placeholder="Retype your Password"
                  value={this.state.retypePassword}
                  onChange={(ev) => this.setState({ retypePassword: ev.target.value })}
                />
                <img src={eye} onClick={() => this.RetypePassword()} className="cursor-pointer absolute w-7 mt-2 ml-80" />
              </div>
              <button type="submit" className="justify-center mt-8 w-96 py-4 px-6 border border-transparent rounded-full text-lg font-medium text-white bg-red-500 hover:bg-red-700" onClick={(ev) => this.Regis(ev)}>
                Sign Up
              </button>
            </form>
            {/* <form
                                action="#"
                                method="POST"
                                className="mt-8"
                                onSubmit={(ev) => this.Regis(ev)}>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4"
                                    placeholder="Your name"
                                    value={this.state.nama}
                                    onChange={(ev) => this.setState({nama: ev.target.value})}/>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                                    placeholder="Enter your Email"
                                    value={this.state.email}
                                    onChange={(ev) => this.setState({email: ev.target.value})}/>
                                <input
                                    type="text"
                                    name="roles"
                                    id="name"
                                    className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                                    placeholder="User role"
                                    value={this.state.roles}
                                    onChange={(ev) => this.setState({roles: ev.target.value})}/>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 rounded-full px-6 py-4 mt-4"
                                    placeholder="Enter your Password"
                                    value={this.state.password}
                                    onChange={(ev) => this.setState({password: ev.target.value})}/>
                                }
                <button
                    type="submit"
                    className="justify-center mt-8 w-96 py-4 px-6 border border-transparent rounded-full text-lg font-medium text-white bg-red-500 "
                    onClick={(ev) => this.Regis(ev)}>
                    Sign Up
                </button>
            </form>
            */}
            <h6 className="text-sm mt-2 text-gray-400">
              Already have account?{" "}
              <Link to="/login">
                <span className="text-red-500">Login</span>
              </Link>
            </h6>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <img src={image} alt="image-login" />
        </div>
      </div>
    );
  }
}
