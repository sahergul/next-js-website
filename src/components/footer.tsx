import Link from "next/link";
import Image from "next/image";
import facebook_image from "/public/facebook.png";
import whatsapp_image from "/public/whatsapp.png";
import twitter_image from "/public/twitter.png";

export default function Footer(){
    const facebookUrl = "https://en-gb.facebook.com/RSComputing/";
    const whatsappUrl = "https://wa.me/message/CTR7ETVBG4HHE1";
    const twitterUrl = "";
        
    return(
        <footer className= "bg-slate-200 flex-justify-arround  h-25 mt-25 py-2">
                <p>&copy; 2024 RS Computers. All rights reserved.</p>
                <div className="mt-2 flex items-center space-x-10">
                    <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    <Image className=" w-10 h-10 rounded-full cursor-pointer hover:scale-110 mb-15 flex items-center justify-center" src={facebook_image} alt="Facebook Logo" />
                    </Link>
                    <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    <Image className=" w-10 h-10 rounded-full cursor-pointer hover:scale-110 mb-15 flex items-center justify-center" src={twitter_image} alt="Twitter Logo" />
                    </Link>
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Image className=" w-10 h-10 rounded-full cursor-pointer hover:scale-110 mb-15 flex items-center justify-center" src={whatsapp_image} alt="Whatsapp Logo" />
                    </Link>
                </div>
            </footer>
    )
}