import Link from 'next/link'
import Image from "next/image";
const Navbar = () => {
  return (
    <>

      <nav className="m-1 bg-gradient-to-b from-slate-500 to-slate-800 h-12 text-white flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold">LI🎁NUX</h1>

        <div className="flex gap-8 ">
          <Link className=' hover:bg-slate-900' href="/">Home</Link>
          <Link href="/newform">Data Entry</Link>
          <Link href="/listado"> Data List</Link>
          <Link href="/about">About ...</Link>
        </div>
      </nav>


      <div className=" flex  justify-center items-center mt-2 sticky top-0">
      <Image
        src="/Logon-removebg-preview.png"
        alt="Mi Logo"
        className=" mr-4"
        width={100}
        height={48}
        priority
      />
      <h1 className=" text-5xl">Electronic Products App </h1>
    </div>

    </>
  );
};
export default Navbar;
{
  /*  <Link to="/create" className='btn btn-primary mt-2 mb-2'>Add 📒 <i className="fas fa-plus"></i></Link> */
}
