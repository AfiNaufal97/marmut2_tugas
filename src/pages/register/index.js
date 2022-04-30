import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVerify, setPasswordVerify] = useState('')

  let navigation = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(passwordVerify)
    let inputRegister = new FormData()
    inputRegister.append("name", name)
    inputRegister.append("email", email)
    inputRegister.append("password", password)
    inputRegister.append("password_confirmation", passwordVerify)

    axios.post('http://localhost:8000/api/register', inputRegister).then((e)=>{
      alert('success')
      navigation('/login')
    }).catch((e)=> alert('error'))
  };

  return (
    <div className=" max-w-sm px-[30px] mx-auto md:max-w-3xl lg:max-w-5xl lg:p-[20px] xl:max-w-7xl ">
      <div className="lg:hidden">
        <div className="mt-[50px]">
          <p className="text-[24px] font-bold text-center">
            Create New Account
          </p>
        </div>
        <div className="mx-auto mt-[50px]">
          <form>
            <input
              type="text"
              placeholder="Input Your Name"
              className="bg-[#C4C4C4] p-3 w-full  mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
              onChange={(event)=>setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Input Your Email"
              className="bg-[#C4C4C4] p-3 w-full mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
              onChange={(event)=>setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Input Your Address"
              className="bg-[#C4C4C4] p-3 w-full mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
              onChange={(event)=>setPassword(event.target.value)}
            />
            <input
              type="password"
              placeholder="Input Your Password"
              className="bg-[#C4C4C4] p-3 w-full mb-[50px] rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
              onChange={(event)=>setPasswordVerify(event.target.value)}
            />

            <button
              className="w-full p-2 bg-green-300 mb-3 rounded-lg"
              type="submit"
              onClick={(event) => registerUser(event)}
            >
              Register
            </button>

            <Link to="/login">
              <button className="w-full p-2 underline font-bold rounded-lg mb-[100px]">
                Have Account
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:block lg:justify-between  px-[20px]  mt-[10%] mb-[25%]">
        <div className="w-1/2 px-5">
          <div className="mt-[50px]">
            <p className="text-[24px] font-bold text-center">
              Create New Account
            </p>
          </div>
          <div className="mx-auto mt-[50px]">
            <form>
              <input
                type="text"
                placeholder="Input Your Name"
                className="bg-[#C4C4C4] p-3 w-full  mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
                onChange={(event)=>setName(event.target.value)}
              />
              <input
                type="email"
                placeholder="Input Your Email"
                className="bg-[#C4C4C4] p-3 w-full mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
                onChange={(event)=>setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Input Your Password"
                className="bg-[#C4C4C4] p-3 w-full mb-3 rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
                onChange={(event)=>setPassword(event.target.value)}
              />
              <input
                type="password"
                placeholder="Input Your Password Verify"
                className="bg-[#C4C4C4] p-3 w-full mb-[50px] rounded-lg placeholder:text-black focus:bg-white focus:placeholder:text-slate-400"
                onChange={(event)=>setPasswordVerify(event.target.value)}
              />

              <button
                className="w-full p-2 bg-green-300 mb-3 rounded-lg hover:bg-green-400 active:bg-red-400"
                type="submit"
                onClick={(event) => registerUser(event)}
              >
                Register
              </button>

              <Link to="/login">
                <button className="w-full p-2 font-bold underline rounded-lg mb-[100px]">
                  Have Account
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
