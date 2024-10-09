import Image from 'next/image';
import pic from "/public/pic.jpeg"
import About from './about/page';
import Services from './services/page';
import Contact from './contact/page';

export default function Home() {
    return (
        <main className="bg-gray-100 flex flex-col min-h-screen">           
                  
            <Image src={pic} alt="laptop-computers" className="bg-cover bg-center bg-no-repeat h-screen w-full"/>
            
            
            <About />
            <Services />
            <Contact />
                        
        </main>
    );
}
