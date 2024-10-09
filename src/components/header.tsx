import Link from "next/link"


export default function Header(){
    return(
            <header className="flex justify-between bg-gray-800 h-19 text-white">
                <div className= "text-3xl h-19 font-semibold italic px-2 py-2">RS Computers
        
                </div>
                <nav>
                    <ul className="flex gap-x-7 mx-4 py-3 px-2">
                        <li className="hover:text-yellow-400"><Link href="/">Home</Link></li>
                        <li className="hover:text-yellow-400"><Link href="./services">Services</Link></li>
                        <li className="hover:text-yellow-400"><Link href="./about">About Us</Link></li>
                        <li className="hover:text-yellow-400"><Link href="./contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            );
}