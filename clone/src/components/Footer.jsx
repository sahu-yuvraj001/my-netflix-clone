import React from "react";
import { Folder } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-auto md:ml-30 sm:ml-45">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-6 text-sm">
          Questions? Call{" "}
          <a
            href="tel:000-800-919-1743"
            className="underline hover:text-red-600"
          >
            8849926163
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm mb-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Speed Test
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal Notices
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Only on Netflix
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Media Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex space-x-6 mt-6">
            <a href="https://www.instagram.com/mr_yuvrajjjj/" className="text-red-600  hover:text-white hover:scale-130 transition duration-500 -130 transition duration-500">
            <svg className="w-6 h-6 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.8a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/sahu-yuvraj/" className="text-red-600  hover:text-white hover:scale-130 transition duration-500 ">
            <svg className="w-6 h-6 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.5 1.1 2.5 2.5zM0 8h5v15H0V8zm7.5 0h4.7v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V23h-5V16c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.6V23h-5V8z" />
            </svg>
          </a>
          <a href="#" className="text-red-600  hover:text-white hover:scale-130 transition duration-500 ">
            <svg className="w-6 h-6 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          <a href="#" className="text-red-600  hover:text-white hover:scale-130 transition duration-500 ">
            <svg className="w-6 h-6 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.13 9.13 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.63 0-4.76 2.1-4.76 4.7 0 .37.04.72.12 1.06A12.94 12.94 0 0 1 3.15.9a4.68 4.68 0 0 0-.64 2.36c0 1.63.85 3.06 2.15 3.9a4.41 4.41 0 0 1-2.15-.6v.05c0 2.3 1.67 4.22 3.88 4.65a4.5 4.5 0 0 1-2.13.08c.6 1.84 2.34 3.18 4.4 3.22A9.06 9.06 0 0 1 2 19.55 12.8 12.8 0 0 0 8.29 21c7.55 0 11.68-6.15 11.68-11.5 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 23 3" />
            </svg>
          </a>
          <a href="https://helloitsmyportfolio.netlify.app/" className="text-red-600  hover:text-white hover:scale-130 transition sm:text-[14px] duration-500 ">
            Portfolio
          </a>
          <a href="https://itsmycarrental.netlify.app/" className="text-red-600  hover:text-white hover:scale-130 sm:text-[14px] transition duration-500 ">
           <Folder/> Projects
          </a>

          
        </div>

        <p className="text-xs text-gray-500 mt-6">&copy; 2025 Clone </p>
      </div>
    </footer>
  );
}

export default Footer;
