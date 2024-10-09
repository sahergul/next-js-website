import Link from "next/link";

export default function Footer(){
    return(
        <footer className= "bg-gray-800 flex-justify-arround text-white h-20 mt-30 py-2">
                <p>&copy; 2024 RS Computers. All rights reserved.</p>
                <div className="mt-2">
                    <Link href="https://en-gb.facebook.com/RSComputing/" className="mx-2 hover:underline">Facebook</Link>
                    <Link href="#" className="mx-2 hover:underline">Twitter</Link>
                    <Link href="#" className="mx-2 hover:underline">LinkedIn</Link>
                </div>
            </footer>

    )
}