
export default function Contact(){
    return(
            
   
    <section id="contact" className="text-center py-20 bg-transparent">
                <h2 className="text-3xl font-bold">Get In Touch</h2>

                <form action="https://formspree.io/f/{form_id}" method="post" className="max-w-md mx-auto mt-6">
                    <input type="text" placeholder="Name" className="border border-gray-300 rounded p-2 w-full mb-4" required />
                    <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2 w-full mb-4" required />
                    <textarea placeholder="Message" className="border border-gray-300 rounded p-2 w-full mb-4" required></textarea>
                    <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded">Send Message</button>
                </form>
                
                <div className="mt-6">
                    <p><strong>Phone:</strong> (0092) 322-3413454</p>
                    <p><strong>Email:</strong> ahmedrameez91@gmail.com</p>
                    <p><strong>Address:</strong> Plot # A2, sector 41B, Korangi no. 2-1/2, Karachi.</p>
                </div>
            </section>
            )};
