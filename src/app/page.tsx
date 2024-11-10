import Image from 'next/image';
import pic from "/public/pic.jpeg"
import About from './about/page';
import Services from './services/page';
import Contact from './contact/page';

export default function Home() {
    return (
        <main className="bg-gray-100 flex flex-col max-w-screen-2xl ">           
                  
        <div className="relative w-full h-72 sm:h-screen">
        <Image
        src={pic}
        alt="laptop-computers"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="bg-cover bg-center bg-no-repeat"/>
        </div>
            
            <About />
            <Services />
            <Contact />
                        
        </main>
    );
}
