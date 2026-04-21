import logo from '../assets/img/nubdexchange_logo.png';

const Footer = () => {
  return (
    <div className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <img src={logo} alt="BulldogEx" className="mx-auto h-13 w-13 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" />
        <p className="mt-1 text-lg font-bold text-zinc-300">BulldogEx Shop</p>
        <p className="mt-4 text-sm text-zinc-300">
          © {new Date().getFullYear()} Wireframe. All rights reserved.
        </p>
      </div>
    
    </div>
  )
}

export default Footer
