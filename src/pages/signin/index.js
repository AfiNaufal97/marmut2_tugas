import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signin() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault()
    const formLogin = new FormData();
    formLogin.append("email", email);
    formLogin.append("password", password);
    axios
      .post("http://localhost:8000/api/login", formLogin)
      .then((e) => {
        localStorage.setItem("token", e.data.token);
        alert("berhasil masuk");
      })
      .catch((e) => alert("gagal masuk"));
  };



  return (
    <div className=" max-w-sm px-[30px] mx-auto md:max-w-3xl lg:max-w-5xl lg:p-[20px] xl:max-w-7xl ">
      <div className="lg:hidden h-[100%]">
        <div className="mt-[50px]">
          <p className="text-[24px] font-bold text-center">
            Hello Welcome Back
          </p>
        </div>
        <div className="mx-auto mt-[50px]">
          <form>
            <input
              type="text"
              placeholder="Input Your Email"
              className="bg-[#C4C4C4] p-3 w-full mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
              onChange={(event)=>setEmail(event.target.value)}
            />

            <input
              type="password"
              placeholder="Input Your Password"
              className="bg-[#C4C4C4] p-3 w-full mb-[50px] rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
              onChange={(event)=>setPassword(event.target.value)}
            />

            <button
              className="w-full p-2 bg-green-300 mb-3 rounded-lg"
              type="submit"
              onClick={(event)=>loginUser(event)}
            >
              SignIn
            </button>

            <Link to="/register">
              <button
                className="w-full p-2 font-bold underline rounded-lg mb-[100px]"
                type="submit"
              >
                Register New Member
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:block lg:justify-between  px-[20px] mt-[10%] mb-[25%]">
        <div className="w-1/2 px-5">
          <div className="mt-[50px]">
            <p className="text-[24px] font-bold text-center">
              Hello Welcome Back
            </p>
          </div>
          <div className="mx-auto mt-[50px]">
            <form>
              <input
                type="text"
                placeholder="Input Your Email"
                className="bg-[#C4C4C4] p-3 w-full mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
                onChange={(event)=>setEmail(event.target.value)}
              />

              <input
                type="password"
                placeholder="Input Your Password"
                className="bg-[#C4C4C4] p-3 w-full mb-[50px] rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
                onChange={(event)=>setPassword(event.target.value)}
              />

              <button
                className="w-full p-2 bg-green-300 mb-3 rounded-lg"
                type="submit"
                onClick={(event)=>loginUser(event)}
              >
                SignIn
              </button>

              <Link to="/register">
                <button
                  className="w-full p-2 font-bold underline rounded-lg mb-[100px]"
                  type="submit"
                >
                  Register New Member
                </button>
              </Link>
            </form>
          </div>
        </div>

        <div className="w-1/2 my-auto ">
          <img
            src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1650225706/karlijn-prot-5hMlxeWjVCo-unsplash_ovgjtq.jpg"
            alt="Gambar"
            className="h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
