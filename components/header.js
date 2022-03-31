import Image from "next/image";
import logo from '../public/images/logo.png'
import loginlogo from '../public/images/login.jpg'

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 flex justify-between w-full px-12 py-2 align-middle bg-black border-b-2 border-gray-800">
        <Image src={logo} alt="netflix" width={110} height={40}/>
        <Image src={loginlogo} alt="netflix" width={40} height={40}/>
      </header>
    </>
  )
}
