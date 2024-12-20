import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c57] text-white pt-8">
      <div className="container  px-8 mx-auto flex justify-around flex-wrap">
        {/* Newsletter Section */}
        <div className=" mb-8 max-w-xl">
          <h3 className="text-lg font-bold">Prashna AI</h3>
          <p className='text-base mt-4'>Stay up to date on the latest features and releases by joining our newsletter</p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded border border-gray-300 outline-none text-white bg-transparent"
            />
            <button className="border border-gray-300 hover:bg-gray-700 text-white px-6 py-4 rounded">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our Company.
          </p>
        </div>
        {/* Pages Section */}
        <div className="mb-8 ml-8">
          <h3 className="text-lg font-bold">Pages</h3>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li className="mt-2">
              <Link href="" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li className="mt-2">
              <Link href="" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-8 ml-8">
          <h3 className="text-lg font-bold">Follow us</h3>
          <ul className="mt-4">
            <li className="mt-3 flex items-center gap-2">
              <Facebook size={24} />
              <Link href="" className="text-white hover:text-gray-300">Facebook</Link>
            </li>
            <li className="mt-3 flex items-center gap-2">
              <Instagram size={24} />
              <Link href="" className="text-white hover:text-gray-300">Instagram</Link>
            </li>
            <li className="mt-3 flex items-center gap-2">
              <Twitter size={24} />
              <Link href="" className="text-white hover:text-gray-300">Twitter</Link>
            </li>
            <li className="mt-3 flex items-center gap-2">
              <Linkedin size={24} />
              <Link href="" className="text-white hover:text-gray-300">Linkedin</Link>
            </li>
            <li className="mt-3 flex items-center gap-2">
              <Youtube size={24} />
              <Link href="" className="text-white hover:text-gray-300">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>  
      <div className="border-t border-gray-300 py-4 text-center max-w-[90%] mx-auto flex justify-between">
        <p className="text-sm">© 2024 All rights reserved.</p>
        <div className="flex gap-4">
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms of Service</p>
          <p className="text-sm">Cookie Settings</p>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;
