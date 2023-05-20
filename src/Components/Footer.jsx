import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-800 text-yellow-300">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">

            
            <div className="flex items-center mb-4 md:mb-0 ">
              <img src="https://images-platform.99static.com//j3lFsXdVOtsovHgOHMt2TIOnevU=/279x0:1622x1343/fit-in/500x500/99designs-contests-attachments/23/23600/attachment_23600424" alt="Website Logo" className="w-32  mr-2 rounded-full" />
             
              
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white">
                <img src="https://www.svgrepo.com/show/364604/instagram-logo-fill.svg" className='w-8' alt="" />
              </a>
              <a href="#" className="hover:text-white">
               <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" className='w-8' alt="" />
              </a>
              <a href="#" className="hover:text-white">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" className='w-8' alt="" />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center md:flex md:justify-center md:space-x-8">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Products
            </a>
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Toy Website. All rights reserved.</p>
            <p>123 Toy Street, City, State, ZIP</p>
            <p>Email: info@toywebsite.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
