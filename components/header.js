import Image from "next/image";
import logo from '../public/images/logo.png'
import loginlogo from '../public/images/login.jpg'

export default function Header() {
  return (
    <>
      <header className="flex justify-between px-12 py-2 align-middle bg-black border-2 border-gray-800">
        <Image src={logo} alt="netflix" width={110} height={40}/>
        <Image src={loginlogo} alt="netflix" width={40} height={40}/>
      </header>
    </>
  )
}
